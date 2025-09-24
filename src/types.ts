type Enclosure = {
  url: string;
  type: string;
};

export type RssItem = {
  title: string;
  link: string;
  category: string;
  pubDate: string;
  enclosure: Enclosure;
};

export type InputParams = {
  category: string;
  limit?: number;
  offset?: number;
};
