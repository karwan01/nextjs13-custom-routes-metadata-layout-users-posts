import React from "react";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page description",
};
async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users: User[] = await usersData;

  return (
    <div>
      {users.map((e) => (
        <>
          <h3 key={e.id}>
            <Link href={`/users/${e.id}`}>{e.name}</Link>
          </h3>
          <br />
        </>
      ))}
    </div>
  );
}

export default Users;
