import Image from "next/image"
import { Link } from "@/components/navigation/Link"
import { absoluteUrl, formatDate } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"

interface NoteTeaserProps {
  node: DrupalNode
}

export function NoteTeaser({ node, ...props }: NoteTeaserProps) {
  return (
    <article {...props} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden mb-6 break-inside-avoid">
      {node.field_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={480}
            alt={node.field_image.resourceIdObjMeta.alt}
            className="w-full h-40 object-cover"
          />
        </figure>
      )}

      <div className="p-5 pb-7">
        <h3 className="text-xl font-medium text-slate-800 mb-2">
          <Link href={node.path.alias} className="no-underline text-sky-600 hover:text-sky-800 font-medium transition-colors">
            {node.title}
          </Link>
        </h3>

        {node.field_summary?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.field_summary?.processed }}
            className="text-slate-700 text-sm mb-4 break-words prose">
          </div>
        )}

        {node.body && (
          <Link
            href={node.path.alias}
            className="inline-flex items-center border border-sky-600 text-sky-700 hover:bg-sky-100 font-medium px-4 py-2 rounded-md transition-colors"
          >
            Read More
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  )
}
