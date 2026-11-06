export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Topic = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  active: boolean;
  categoryId: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string | null;
  imageUrl: string | null;
  published: boolean;
  topicId: number;
  topicName: string;
  createdAt: string;
  updatedAt: string;
};

export type ArticleSection = {
  id: number;
  title: string;
  content: string;
  sectionType: string;
  displayOrder: number;
  active: boolean;
  articleId: number;
  createdAt: string;
  updatedAt: string;
};