import styled from 'styled-components';

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  min-height: 300px;
  clip-path: inset(0 0 900px 0); 
overflow: hidden;
  background-color:linear-gradient(90deg, #000000 -26.67%, rgba(0, 0, 0, 0) 100%);
`;
const BannerContainer = styled.header`
  position: relative;
  color: #fff;
`;

const BannerBody = styled.div`
  position: absolute;
  top: 10%;
  padding-left: 8%;
  padding-right: 8%;
  width: 80%;
  color: #000;
`;
const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;

export {
  Container, BannerImage, BannerContainer, BannerBody,
};
