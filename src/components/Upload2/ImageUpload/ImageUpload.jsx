/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
// /* eslint-disable react/display-name */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */

// import React, { forwardRef, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   ImageUploadContainer, ImageUploadDescription, ImageUploadLabel, ImageUploadPreview,
// } from './ImageUpload.style';

// // import { colors } from '../../styles/colors';
// // import { Icon } from '../Icon/Icon';

// const ImageUpload = forwardRef(({ onClick, onChange }, ref) => {
//   const [uploadedImage, SetUploadedImage] = useState({
//     isUploaded: false,
//   });
//   const inputUploadElement = useRef(null);
//   const onFileChange = (evt) => {
//     if (evt.target.files.length > 0) {
//       const stateUpdateObject = {
//         currentFile: evt.target.files[0],
//         previewImage: URL.createObjectURL(evt.target.files[0]),
//         isUploaded: true,
//       };
//       SetUploadedImage(stateUpdateObject);
//       onChange(stateUpdateObject);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleOnDrop = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     onFileChange({
//       target: event.dataTransfer,
//     });
//   };

//   const onUploadButtonClick = () => {
//     inputUploadElement.current.click();
//   };

//   return (
//     <div onClick={onUploadButtonClick} ref={ref}>
//       {
//         uploadedImage.isUploaded ? <ImageUploadPreview src={uploadedImage.previewImage} />
//           : (
//             <ImageUploadContainer onDragOver={handleDragOver} onDrop={handleOnDrop}>
//               <ImageUploadLabel>Upload files</ImageUploadLabel>
//               <ImageUploadDescription>Drag and drop files here</ImageUploadDescription>
//             </ImageUploadContainer>
//           )
//       }
//       <input ref={inputUploadElement} type="file" onChange={onFileChange} accept="image/*" hidden />
//     </div>
//   );
// });

// ImageUpload.defaultProps = {
//   onChange: () => {},
// };

// ImageUpload.propTypes = {
//   onChange: PropTypes.func,
// };

// export default ImageUpload;

import React from 'react';
import ImageUploading from 'react-images-uploading';

export default function ImageUpload({ images, onChange }) {
  const maxNumber = 1;

  return (
    <div className="App">

      <ImageUploading
        multiple="false"
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (

          <div className="">
            <div className="card">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <h1>Drag or Upload a Car Image</h1>
              </button>
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item card d-flex justify-content-center align-items-center">
                <img src={image.data_url} alt="" className="img-uploaded" />
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn sp-btn border me-2" onClick={() => onImageUpdate(index)}>Update</button>
                  {/* <button className="btn sp-btn border ms-2" onClick={onUpload}>Upload</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

    </div>

  );
}
