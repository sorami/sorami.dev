import fs from "fs";
import Airtable from "airtable";
import type { TimelineItem } from "../types";
import jsonData from "../data/timeline.json";

export const getTimeline = async () => {
  let timelineItems: TimelineItem[];

  // load from Airtable in production, otherwise load from local JSON file
  if (import.meta.env.MODE === "development") {
    timelineItems = jsonData;
  } else {
    console.log("Loading Airtable data ...");
    const base = new Airtable({
      apiKey: import.meta.env.AIRTABLE_API_KEY,
    }).base("appL5qj0SwKUNPbVn");
    const records = await base("timeline")
      .select({
        sort: [{ field: "date", direction: "desc" }],
      })
      .all();

    timelineItems = records.map((d) => d.fields as TimelineItem);
    fs.writeFileSync(
      "./src/data/timeline.json",
      JSON.stringify(timelineItems, null, 2),
    );
  }

  return timelineItems;
};
