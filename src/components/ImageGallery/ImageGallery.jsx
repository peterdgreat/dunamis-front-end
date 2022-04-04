/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Row } from './ImageGallery.style';

export default function ImageGallery() {
  const posts = useSelector((state) => state.posts.posts);
  const [search, setSearch] = useState('');
  const handleClick = (e) => {
    setSearch(e.target.value);
  };
  const filtered = Object.entries(posts).filter((data) => {
    const [, value] = data;
    return value.category.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filtered);
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <Row> */}
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
        {
        filtered.map((post) => {
          const [key, value] = post;
          return (
            <div className="col-6 col-md-4 col-lg-3 mb-3" key={key}>
              <img src={value?.image} alt={value?.category} className="w-100 shadow-1-strong mx-0 rounded" />
            </div>
          );
        })
      }
        {/* </Row> */}
      </div>
    </div>

  );
}
