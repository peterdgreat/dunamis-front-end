import React from 'react';
import { useSelector } from 'react-redux';

export default function Banner() {
  const posts = useSelector((state) => state.posts.posts);
  const post = posts[Math.floor(Math.random() * posts.length)];
  console.log(post);
  return (
    <header
      style={
        {
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }
    }
    >
      <div className="container content">
        <h1>
          Looking for something different?
        </h1>
        <p>
          Are you a couple looking for more than just beautiful wedding photography?
          You want something artistic, emotive, creative and also timeless?
          Let us make your desires come true.
          We have a wide range of photography services for you.
        </p>
        <button type="button" className="btn btn-primary">
          Book Now
        </button>
      </div>
    </header>
  );
}
