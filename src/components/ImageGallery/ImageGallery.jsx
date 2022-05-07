import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalImage from 'react-modal-image';
import Masonry from 'react-responsive-masonry';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { deletePost } from '../../redux/posts/posts';
import Promisetracker from '../../Promisetracker';
import Button from '../Button/Button';

export default function ImageGallery() {
  const posts = useSelector((state) => state.posts.posts);
  const admin = useSelector((state) => state.admin);
  const [search, setSearch] = useState('');
  const handleClick = (e) => {
    setSearch(e.target.value);
  };
  const filtered = Object.entries(posts).filter((data) => {
    const [, value] = data;
    const searched = value.category.toLowerCase().includes(search.toLowerCase());
    if (searched) {
      return true;
    }
    return false;
  });
  const handleDelete = async (id) => {
    const response = await deletePost(id);
    if (response.status === 200) {
      alert('Image Deleted');
    }
  };
  return (
    <div className="container-fluid pt-5">

      <div className="row">
        <div className="btn-group d-flex justify-content-around mb-4" role="group" aria-label="Basic mixed styles example">
          <Button
            primary={false}
            onClick={handleClick}
            label="All"
            value=""
            format="outlined"
          />
          <Button
            primary={false}
            onClick={handleClick}
            label="Weddings"
            format="outlined"
            value="wedding"
          />

          <Button
            primary={false}
            onClick={handleClick}
            label="Portraits"
            format="outlined"
            value="portrait"
          />

          <Button
            primary={false}
            onClick={handleClick}
            label="Beauty"
            format="outlined"
            value="beauty"
          />
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
        <Promisetracker />
        ;
      </div>

    </div>

  );
}
