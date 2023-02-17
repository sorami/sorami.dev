type LinkItem = {
  name: string;
  href: string;
};

type WorkItem = {
  title: string;
  url: string;
  description: string;
  image: string;
};

type TimelineItem = {
  url: string;
  date: string;
  type: string;
  title: string;
  description?: string;
};

export type { LinkItem, WorkItem, TimelineItem };
