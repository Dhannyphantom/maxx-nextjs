import { useRouter } from "next/router";

export default function NewsDetail() {
  const {
    query: { newsId },
  } = useRouter();
  return <h1>This is the {newsId} page</h1>;
}
