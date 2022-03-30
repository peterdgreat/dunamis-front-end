import React from 'react';

// import { Provider } from 'react-redux';
import ImageGAllery from './ImageGallery';
// import store from '../../redux/configurestore';

export default {
  title: 'Component/ImageGallery',
  component: ImageGAllery,
};

const Template = () => (
  // <Provider store={store}>
  <ImageGAllery />
  // </Provider>
);

export const gallery = Template.bind({});
