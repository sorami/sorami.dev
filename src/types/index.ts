type TimelineItem = {
  url: string;
  date: string;
  type: string;
  title: string;
  description?: string;
};

type WorkItem = {
  title: string;
  type: "article" | "paper" | "presentation" | "podcast";
  url: string;
  description: string;
  image: string;
};

export type { TimelineItem, WorkItem };
