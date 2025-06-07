import { PostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();
  return (
    <div>
      <h2 className="text-2xl font-semibold">{data.title}</h2>
      <p className="mt-2">{data.body}</p>
    </div>
  );
}
