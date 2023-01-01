import Airtable from "airtable";
import type { TimelineItem } from "../types";

export const getTimeline = async () => {
  const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_API_KEY }).base(
    "appL5qj0SwKUNPbVn",
  );
  const records = await base("timeline")
    .select({
      sort: [{ field: "date", direction: "desc" }],
    })
    .all();

  return records.map((d) => d.fields as TimelineItem);
};
