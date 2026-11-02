import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { MockTopic } from "@/types/content";

export function TopicCard({ topic }: { topic: MockTopic }) {
  return (
    <Link className="topic-card" href={`/topics/${topic.slug}`}>
      <span className="topic-card__top">
        <Layers3 size={17} strokeWidth={1.5} aria-hidden="true" />
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>
      <span>
        <span className="topic-card__title">{topic.name}</span>
        <span className="topic-card__description">{topic.description}</span>
      </span>
    </Link>
  );
}
