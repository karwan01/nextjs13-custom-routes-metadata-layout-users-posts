export default async function getSingleUser(userId: string) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}
