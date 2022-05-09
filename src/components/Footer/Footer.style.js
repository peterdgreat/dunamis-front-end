import styled from 'styled-components';
import { device, colors } from '../../styles/global.style';

const FooterWrap = styled.footer`
    background-color: #32273b;
`;
const Container = styled.div`
  padding: 8%;
  margin-top: 64px;
  @media ${device.md} {
    padding-top: 73px;
    padding-bottom: 174px;
  }
`;

const Heading = styled.h3`
  font-family: "DM Sans";
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;

  /* Color/Brand/Primary */

  color: #135896;
`;

const Ul = styled.ul`
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  padding-inline-start: 0px;
`;

const Li = styled.li`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #135896;
  text-decoration: none;
`;
const Href = styled.a`
  text-decoration: none;
  color: ${colors.primary};
`;

const Subtitle = styled.span`
  font-family: "Nanum Pen";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ce2e38;
`;
const LastFooter = styled.div`
background: #32273b;
@media ${device.md}{
    // height: 74.68px;
}
`;
const LastWrapper = styled.div`
padding: 18.5px 8% 2.35px 8%;
margin-top: 64px;
`;
const Reserved = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #D9DBE1;
`;
const Socials = styled.div`
  list-style: none;
  display: flex;
  align-items: start;
  padding-inline-start: 0px;

`;
const SocialList = styled.li`
  font-family: "DM Sans";
  margin: 0 16px 0 16px;
  text-decoration: none;
`;
export {
  SocialList, Socials, Reserved,
  LastWrapper, LastFooter, Href, Subtitle, FooterWrap, Container, Heading, Ul, Li,
};
