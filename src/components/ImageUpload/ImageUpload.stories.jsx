/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment, useRef } from 'react';

import ImageUpload from './ImageUpload';

export default {
  title: 'Component/Image Upload',
  component: ImageUpload,
};

const Template = (args) => {
  const imageUploadElement = useRef(null);
  return (
    <>
      <ImageUpload {...args} ref={imageUploadElement} />
      <button label="Upload" onClick={() => imageUploadElement.current.click()} style={{ margin: 25 }}>
        Upload
      </button>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  onChange: (evt) => console.log(evt),
};
