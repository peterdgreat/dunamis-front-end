import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Banner.css';
import {
  Container, BannerBody, BannerContainer,
  BannerDescription,
  Link,
} from './Banner.style';
import Heading from '../Header/Heading';
import Button from '../Button/Button';

export default function Banner(props) {
  const { description, title } = props;
  const posts = useSelector((state) => state.posts.posts);
  const weddings = Object.values(posts).filter((post) => post.category.toLowerCase() === 'weddings');
  const post = weddings[Math.floor(Math.random() * weddings.length)];
  return (
    <Container>
      <BannerContainer bg={post?.image}>
        <BannerBody>
          <Heading>
            { title }
          </Heading>
          <BannerDescription>
            {description}
          </BannerDescription>
          <Button label={<Link href="https://wa.me/+2348166085833" target="_blank">Talk to us</Link>} format="outlined" />
        </BannerBody>
      </BannerContainer>
    </Container>
  );
}

Banner.defaultProps = {
  title: 'Looking for something different?',
  description: 'Are you a couple looking for more than just beautiful wedding photography? You want something artistic, emotive, creative and also timeless? Let us make your desires come true. We have a wide range of photography services for you',
};

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
