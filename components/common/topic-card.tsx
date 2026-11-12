
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Topic } from "@/types/content-api";

type TopicCardProps = {
  topic: Topic;
  categorySlug: string;
};

export function TopicCard({ topic, categorySlug }: TopicCardProps) {
  return (
    <Link
      className="topic-card"
      href={`/categories/${categorySlug}/topics/${topic.slug}`}
    >
      <span className="topic-card__top">
        <Layers3 size={17} strokeWidth={1.5} aria-hidden="true" />
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>

      <span>
        <span className="topic-card__title">{topic.name}</span>
        <span className="topic-card__description">
          {topic.description ?? "Explore este tópico."}
        </span>
      </span>
    </Link>
  );
}
