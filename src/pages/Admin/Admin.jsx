import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '../../components/DropDown/DropDown';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import NotFound from '../404/NotFound';
import { makePost } from '../../redux/posts/posts';

export default function Admin() {
  const admin = useSelector((state) => state.admin);
  console.log(admin);
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

  const getAdminId = () => {
    if (admin) {
      return admin?.admin?.id;
    }
    return '';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('image', images);
    postData.append('category', selectedWedding);
    postData.append('admin_id', getAdminId());
    const response = await makePost(postData);
    console.log(response.status);
    if (response.status === 200) {
      setResponse('Image Successfully Uploaded');
      window.location.href = '/';
    }
  };
  return (
    <div>
      {admin?.admin?.id ? (
        <form className="d-flex flex-column h-100 justify-content-center align-items-center " onSubmit={handleSubmit}>
          {Response}
          <ImageUpload
            images={images}
            onChange={
              (e) => {
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
            }}
          />
          <button className="btn btn-outline-success rounded-pill" type="submit">Add</button>
        </form>
      ) : <NotFound /> }

    </div>
  );
}
