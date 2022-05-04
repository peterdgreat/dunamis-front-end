import styled from 'styled-components';
import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  min-height: 300px;
  background-color:linear-gradient(90deg, #fff -26.67%, rgba(0, 0, 0, 0) 100%);
`;
const BannerContainer = styled.header`
  // position: relative;
  color: red;
  background: linear-gradient(
     rgba(0,0,0, 0.8), 
    rgba(50, 39, 59, 0.7)
    ), url(${(props) => props.bg});
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  object-fit:contain;
  background-position: top;
`;

const BannerBody = styled.div`
  padding-top: 250px;
  padding-left: 8%;
  padding-right: 8%;
  width: 80%;
  color: #000;
`;
const Container = styled.div`
  height: 100%;
  // overflow: hidden;
`;
const BannerDescription = styled.p`
  ${getTypographyFontStyle({ variant: 'body1', weight: 400 })}
  color: ${colors.primary};
  margin: 16px 0;
  @media ${device.md} {
    margin: 22px 0 32px;
    max-width: 600px;
  } 
`;
const Link = styled.a`
   text-decoration:none;
   color: ${colors.primary};
   &&:hover {
      color: ${colors.darkGrey};
   }
   `;

export {
  Link,
  BannerDescription, Container, BannerImage, BannerContainer, BannerBody,
};
