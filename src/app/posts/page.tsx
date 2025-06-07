import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  async function handleFetchPost() {
    "use server";

    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json();
    console.log(data.posts);
  }

  async function handleSearchUser(formData: FormData) {
    "use server";

    const userID = formData.get("userID");
    const response = await fetch(`https://dummyjson.com/posts/user/${userID}`);
    const data: ResponseProps = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center my-4 mb-2 font-bold text-3xl">
        Todos os Posts
      </h1>
      <button onClick={handleFetchPost}>Buscar Posts</button>
      <form className="flex gap-2 my-4" action={handleSearchUser}>
        <input
          name="userID"
          type="text"
          placeholder="ID do Usuário"
          className="border border-gray-200 p-2"
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Buscar Usuário
        </button>
      </form>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link className="text-blue-500" href={`/posts/${post.id}`}>
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
