import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Description } from './Home.style';
import Header from '../../components/Header/Header';
import { colors } from '../../styles/global.style';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <Container>
        <Header color={colors.dark} title="Let us tell your story" />
        <Description>
          We are story tellers who
          love photography and we work to
          capture every nuance of your day.
          To us every couple is unique and in turn their wedding
          therefore we approach
          every event differently.
          It&#39;s important to us that we get
          to capture the uniqueness of your day. As a result we tailor our packages
          to meet your specific requirements.
        </Description>
        <Description>
          Let us take you on a journey
          of beauty, elegance, romance, fun and timeless moments through our portfolio.
        </Description>
        <Button
          format="outlined"
          label="Portfolio"
          primary={false}
          onClick={() => { navigate('/portfolio'); }}
        />
      </Container>
    </>
  );
}
