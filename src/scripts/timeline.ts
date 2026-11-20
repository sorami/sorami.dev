import type { TimelineItem } from "../types";
import timelineData from "../data/timeline.json";

// Timeline items are maintained directly in src/data/timeline.json.
export const getTimeline = (): TimelineItem[] =>
  [...timelineData].sort((a, b) => b.date.localeCompare(a.date));
