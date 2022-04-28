import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Banner() {
  const posts = useSelector((state) => state.posts.posts);
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(posts[Math.floor(Math.random() * posts.length)]);
  }, []);
  return (
    <div>
      Hi there, I am
      {' '}
      {post.id}
    </div>
  );
}
