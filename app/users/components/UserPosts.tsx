import React from "react";

type Props = {
  promise: Promise<Post[]>;
};
export default async function UserPosts({ promise }: Props) {
  const posts: Post[] = await promise;
  return (
    <>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <br />
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <br />
        </div>
      ))}
    </>
  );
}
