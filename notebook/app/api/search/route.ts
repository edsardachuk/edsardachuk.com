import { drupal } from "@/lib/drupal"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") || ""
  // const limit = parseInt(searchParams.get("limit") || "20", 10)
  // const page = parseInt(searchParams.get("page") || "0", 10)

  const params: Record<string, string> = {
    "filter[status]": "1",
    // "page[limit]": limit.toString(),
    // "page[offset]": (page * limit).toString(),
    "fields[node--note]": "title,path,field_image,field_summary,body,uid,created",
    include: "field_image,uid",
    sort: "-created",
  }

  if (q) {
    Object.assign(params, {
      "filter[combine][group][conjunction]": "OR",

      // Title contains query.
      "filter[title][condition][path]": "title",
      "filter[title][condition][operator]": "CONTAINS",
      "filter[title][condition][value]": q,
      "filter[title][condition][memberOf]": "combine",

      // Summary contains query.
      "filter[text][condition][path]": "field_summary.value",
      "filter[text][condition][operator]": "CONTAINS",
      "filter[text][condition][value]": q,
      "filter[text][condition][memberOf]": "combine",

      // Body contains query.
      "filter[body][condition][path]": "body.value",
      "filter[body][condition][operator]": "CONTAINS",
      "filter[body][condition][value]": q,
      "filter[body][condition][memberOf]": "combine",
    })
  }

  try {
    const data = await drupal.getResourceCollection("node--note", { params })
    return NextResponse.json({ nodes: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to fetch results" }, { status: 500 })
  }
}
