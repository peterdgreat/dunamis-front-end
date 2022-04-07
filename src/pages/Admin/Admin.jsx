import React, { useState } from 'react';
import Dropdown from '../../components/DropDown/DropDown';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { makePost } from '../../redux/posts/posts';

export default function Admin() {
  const [images, setImages] = useState('');
  const [selectedWedding, setSelectedWedding] = useState('');
  const [Response, setResponse] = useState('');
  const weddingOptions = [
    {
      value: 'Weddings',
      label: 'Weddings',
    },
    {
      value: 'Portraits',
      label: 'Portraits',
    },
    {
      value: 'Fashion',
      label: 'Fashion',
    },
    {
      value: 'Beauty',
      label: 'Beauty',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('image', images);
    postData.append('category', selectedWedding);
    postData.append('admin_id', 1);
    const response = await makePost(postData);
    setResponse('Hello');
    console.log(response);
    console.log(Response);
  };
  return (
    <div>
      <form className="d-flex flex-column h-100 justify-content-center align-items-center " onSubmit={handleSubmit}>
        <ImageUpload
          images={images}
          onChange={
              (e, addUpdateIndex) => {
                console.log(e, addUpdateIndex);
                setImages(e.currentFile);
              }
        }
        />
        <Dropdown
          optionsList={weddingOptions}
          placeholder="Select option"
          label="Select Field"
          value="key 5"
          onChange={(e) => {
            setSelectedWedding(e.value);
            console.log(e);
          }}
        />
        <button className="btn btn-outline-success rounded-pill" type="submit">Book Now</button>
      </form>
    </div>
  );
}
