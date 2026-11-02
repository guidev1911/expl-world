export type MockCategory = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
};

export type MockTopic = {
  slug: string;
  name: string;
  description: string;
  categorySlug: string;
  image: string;
};

export type MockArticleSection = {
  id: string;
  title: string;
  body: string;
};

export type MockArticle = {
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  topicSlug: string;
  image: string;
  imageAlt: string;
  readTime: string;
  sections: MockArticleSection[];
};
