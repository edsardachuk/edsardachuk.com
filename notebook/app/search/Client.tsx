"use client"

import { useEffect, useState } from "react"
import { NoteTeaser } from "@/components/drupal/NoteTeaser"
import { DrupalNode } from "next-drupal"
import { Loading } from "@/components/misc/Loading"

export function NoteSearchClient() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<DrupalNode[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const handler = setTimeout(async () => {
      setLoading(true)
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const json = await res.json()
      setResults(Array.isArray(json.nodes) ? (json.nodes as DrupalNode[]) : [])
      setLoading(false)
    }, 300)

    return () => clearTimeout(handler)
  }, [query])

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">Find a note</h1>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search here..."
        className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
        autoFocus
      />

      {loading && <Loading />}

      <div className="columns-1 sm:columns-2 gap-6 mt-6">
        {results.length ? (
          results.map((node) => (
            <div key={node.id}>
              <NoteTeaser node={node} />
            </div>
          ))
        ) : (
          !loading && query && <p>No notes found.</p>
        )}
      </div>
    </div>
  )
}
