import Image from "next/image"
import { absoluteUrl, formatDate } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"

interface NoteProps {
  node: DrupalNode
}

export function Note({ node, ...props }: NoteProps) {
  console.log(node);
  return (
    <article {...props}>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure className="mb-4">
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={400}
            alt={node.field_image.resourceIdObjMeta.alt || ""}
            priority
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
      {node.field_summary?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.field_summary?.processed }}
          className="text-base text-slate-700 mb-4 leading-loose prose">
        </div>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="text-base text-slate-700 mb-4 leading-loose prose"
        />
      )}
    </article>
  )
}
