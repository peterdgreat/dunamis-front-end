import React from 'react';
import { useSelector } from 'react-redux';
import './Banner.css';
import {
  Container, BannerBody, BannerContainer, BannerImage,
} from './Banner.style';

export default function Banner() {
  const posts = useSelector((state) => state.posts.posts);
  const weddings = Object.values(posts).filter((post) => post.category.toLowerCase() === 'weddings');
  const post = weddings[Math.floor(Math.random() * weddings.length)];
  return (
    <Container>
      <BannerContainer>
        <BannerImage
          src={post?.image}
        />
        <BannerBody>
          <h1>
            Looking for something different?
          </h1>
          <p>
            Are you a couple looking for more than just beautiful wedding photography?
            You want something artistic, emotive, creative and also timeless?
            Let us make your desires come true.
            We have a wide range of photography services for you.
          </p>
          <button type="button" className="btn btn-primary">
            Book Now
          </button>
        </BannerBody>
      </BannerContainer>
    </Container>
  );
}
