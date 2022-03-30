import React from 'react';
import { useSelector } from 'react-redux';

export default function ImageGallery() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div className="row">
      {
        posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <img src={post?.image} alt="post" />
          </div>
        ))
      }
      {/* <div className=" col-12 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div> */}
    </div>

  );
}
