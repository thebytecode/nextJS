import { useEffect, useState } from "react";
import { Post } from "@/type"; // Import the Post type

export default function Blogs() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    // Generate a random user ID between 1 and 10
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomUserId);

    // Fetch posts for the random user
    fetch(`http://localhost:6000/users/${randomUserId}/posts`)
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {userId && <h2>Posts from User {userId}</h2>}
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>
  );
}
