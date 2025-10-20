import { NoteTeaser } from "@/components/drupal/NoteTeaser"
import { drupal } from "@/lib/drupal"
import type { Metadata } from "next"
import type { DrupalNode } from "next-drupal"
import { Quote } from "@/components/drupal/Quote"
import { Link } from "@/components/navigation/Link"

export const metadata: Metadata = {
  description: "Drupal Notes by Ed Sardachuk",
}

export default async function Home() {
  const quotes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--quote",
    {
      params: {
        "filter[status]": 1,
        "fields[node--note]": "title,path,field_image,body,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
      next: {
        tags: ["node:quote"],
      },
    }
  )

  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--note",
    {
      params: {
        "filter[status]": 1,
        "fields[node--note]": "title,path,field_image,field_summary,body,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
      next: {
        tags: ["node:note"],
      },
    }
  )

  return (
    <>
      <div className="">
        {quotes?.length && (
          quotes.map((node) => (
            <div key={node.id}>
              <Quote node={node} />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-slate-900">Latest Notes</h1>
        <Link
          href="/search"
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition-colors"
        >
          Search
        </Link>
      </div>
      <div className="columns-1 sm:columns-2 gap-6">
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NoteTeaser node={node} />
            </div>
          ))
        ) : (
          <p className="py-4">No notes found</p>
        )}
      </div>

    </>
  )
}
