import Image from "next/image"
import { absoluteUrl } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"

interface QuoteProps {
  node: DrupalNode
}

export function Quote({ node, ...props }: QuoteProps) {
  return (
    <section {...props} className="pb-8 flex items-center gap-8 flex-col sm:flex-row">
      {node.field_image && (
        <Image
          src={absoluteUrl(node.field_image.uri.url)}
          alt={node.field_image.resourceIdObjMeta.alt || ""}
          width={200}
          height={200}
          priority
          className="w-24 h-24 rounded-full mx-auto object-cover shadow-sm"
        />
      )}
      {node.body?.processed && (
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            className="w-10 h-10 text-sky-300 absolute -top-2 -left-4 opacity-60"
          >
            <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
          </svg>

          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="prose prose-slate italic font-light text-md text-slate-800 leading-relaxed pl-8"
          />
        </div>
      )}
    </section>
  )
}
