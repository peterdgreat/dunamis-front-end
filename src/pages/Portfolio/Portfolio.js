import React from 'react';
import ImageGAllery from '../../components/ImageGallery/ImageGallery';
import Banner from '../../components/Banner/Banner';
import Container from './Portfolio.style';

export default function Portfolio() {
  return (
    <>
      <Banner />
      <Container>
        <ImageGAllery />
      </Container>
    </>
  );
}
