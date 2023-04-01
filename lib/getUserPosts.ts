export default async function getUserPosts(userId: string) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}
