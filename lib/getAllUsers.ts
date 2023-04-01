export default async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}
