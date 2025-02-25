"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Use env for API URL

const PostDetails = () => {
  const params = useParams();
  const userId = params?.userId;
  const postId = params?.postId; // Get user ID & post ID from URL

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (userId && postId) {
      fetchPost(userId, postId);
    }
  }, [userId, postId]);

  const fetchPost = async (userId: string, postId: string) => {
    try {
       const response = await axios.get(`${API_BASE_URL}/users/${userId}/post/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <a href={`/users/${id}/post`}>Back to Posts</a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
