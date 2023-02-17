type LinkItem = {
  name: string;
  href: string;
};

type TimelineItem = {
  url: string;
  date: string;
  type: string;
  title: string;
  description?: string;
};

export type { LinkItem, TimelineItem };
