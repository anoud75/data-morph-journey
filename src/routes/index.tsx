import { createFileRoute } from "@tanstack/react-router";
import { YamamahStory } from "@/components/story/YamamahStory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "يمامة لعلوم الحياة | قصة الدواء والبيانات" },
      { name: "description", content: "تجربة تفاعلية تكشف كيف تتحول بيانات الدواء الوطنية إلى رؤى وقرارات صحية قابلة للتنفيذ." },
      { property: "og:title", content: "يمامة لعلوم الحياة | قصة الدواء والبيانات" },
      { property: "og:description", content: "من الدواء إلى البيانات الوطنية، ثم إلى رؤى دوائية أذكى عبر منصة اليمامة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: YamamahStory,
});
