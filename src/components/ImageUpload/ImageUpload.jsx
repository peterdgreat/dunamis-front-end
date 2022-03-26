/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageUploadContainer, ImageUploadDescription, ImageUploadLabel, ImageUploadPreview,
} from './ImageUpload.style';

// import { colors } from '../../styles/colors';
// import { Icon } from '../Icon/Icon';

const ImageUpload = forwardRef(({ onClick, onChange }, ref) => {
  const [uploadedImage, SetUploadedImage] = useState({
    isUploaded: false,
  });
  const inputUploadElement = useRef(null);
  const onFileChange = (evt) => {
    if (evt.target.files.length > 0) {
      const stateUpdateObject = {
        currentFile: evt.target.files[0],
        previewImage: URL.createObjectURL(evt.target.files[0]),
        isUploaded: true,
      };
      SetUploadedImage(stateUpdateObject);
      onChange(stateUpdateObject);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onFileChange({
      target: event.dataTransfer,
    });
  };

  const onUploadButtonClick = () => {
    inputUploadElement.current.click();
  };

  return (
    <div onClick={onUploadButtonClick} ref={ref}>
      {
        uploadedImage.isUploaded ? <ImageUploadPreview src={uploadedImage.previewImage} />
          : (
            <ImageUploadContainer onDragOver={handleDragOver} onDrop={handleOnDrop}>
              <ImageUploadLabel>Upload files</ImageUploadLabel>
              <ImageUploadDescription>Drag and drop files here</ImageUploadDescription>
            </ImageUploadContainer>
          )
      }
      <input ref={inputUploadElement} type="file" onChange={onFileChange} accept="image/*" hidden />
    </div>
  );
});

ImageUpload.defaultProps = {
  onChange: () => {},
};

ImageUpload.propTypes = {
  onChange: PropTypes.func,
};

export default ImageUpload;
