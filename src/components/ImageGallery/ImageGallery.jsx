import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Row } from './ImageGallery.style';
import { getPost } from '../../redux/posts/posts';

export default function ImageGallery() {
  const posts = useSelector((state) => state.posts.posts);
  // const categories = ['portraits', 'beauty', 'weddings'];
  const filtered = posts.filter((post) => post.category.toLowerCase().includes('weddings'));
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getPost);
    console.log(filtered);
  };
  console.log(posts);
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <Row> */}
        <div className="btn-group mb-4" role="group" aria-label="Basic mixed styles example">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
          >
            All

          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleClick}
          >
            Weddings

          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            Portraits

          </button>
          <button type="button" className="btn btn-warning">Beauty</button>
        </div>
        {
        posts.map((post) => (
          <div className="col-6 col-md-4 col-lg-3 mb-3" key={post.id}>
            <img src={post?.image} alt={post?.category} className="w-100 shadow-1-strong mx-0 rounded" />
          </div>
        ))
      }
        {/* </Row> */}
      </div>
    </div>

  );
}
