import { Suspense } from "react"
import { NoteSearchClient } from "./Client"
import { Loading } from "@/components/misc/Loading"

export default async function NoteSearch() {
  return (
    <Suspense fallback={<Loading />}>
      <NoteSearchClient />
    </Suspense>
  )
}
