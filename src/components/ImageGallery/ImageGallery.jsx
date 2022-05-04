import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalImage from 'react-modal-image';
import Masonry from 'react-responsive-masonry';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { deletePost } from '../../redux/posts/posts';

export default function ImageGallery() {
  const posts = useSelector((state) => state.posts.posts);
  const admin = useSelector((state) => state.admin);
  const [search, setSearch] = useState('');
  const handleClick = (e) => {
    setSearch(e.target.value);
  };
  const filtered = Object.entries(posts).filter((data) => {
    const [, value] = data;
    return value.category.toLowerCase().includes(search.toLowerCase());
  });
  const handleDelete = async (id) => {
    const response = await deletePost(id);
    if (response.status === 200) {
      alert('Image Deleted');
    }
  };
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="btn-group mb-4" role="group" aria-label="Basic mixed styles example">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
            value=""
          >
            All

          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleClick}
            value="wedding"
          >
            Weddings

          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
            value="portrait"
          >
            Portraits

          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleClick}
            value="beauty"
          >
            Beauty

          </button>
        </div>
        <Masonry columnsCount={3} gutter={4}>
          {
        filtered.map((post) => {
          const [, value] = post;
          return (
            <AnimationOnScroll initiallyVisible animateIn="animate__bounceIn" key={value?.id}>
              <ModalImage
                small={value?.image}
                large={value?.image}
                alt={value?.category}
              />
              {admin?.admin?.id && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(value?.id)}
              >
                Delete
              </button>
              )}

            </AnimationOnScroll>
          );
        })
      }
        </Masonry>
      </div>
    </div>

  );
}
