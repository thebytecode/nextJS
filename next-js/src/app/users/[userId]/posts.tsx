import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Get API URL from env file

const UserPosts = () => {
  const router = useRouter();
  const { id } = router.query;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (id) {
      fetchPosts(id);
    }
  }, [id]);

  const fetchPosts = async (userId: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/post`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h1>User {id}'s Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={`/users/${id}/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
