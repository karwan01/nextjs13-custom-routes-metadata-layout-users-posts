import getSingleUser from "@/lib/getSingleUser";
import getUserPosts from "@/lib/getUserPosts";
import { Metadata } from "next";
import React, { Suspense } from "react";
import UserPosts from "../components/UserPosts";
type Params = {
  params: {
    userId: string;
  };
};
//NOTE: the name of the function should should be same as this because next js will do it by itself under the hood
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getSingleUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: user.address.city,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<User> = getSingleUser(userId);
  const user: User = await userData;

  const userPosts: Promise<Post[]> = getUserPosts(userId);

  return (
    <>
      <p>{user.name}</p>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPosts} />
      </Suspense>
    </>
  );
}
