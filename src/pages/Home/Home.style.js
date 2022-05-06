import styled from 'styled-components';
import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

const Container = styled.div`
// background-color: #32273B;
width: 100%;
height: 100%;
padding-top: 50px;
padding-left: 8%;
padding-right: 8%;
`;
const Description = styled.p`
${getTypographyFontStyle({ variant: 'body1', weight: 400 })}
  color: ${colors.dark};
  margin: 16px 0;
  @media ${device.md} {
    margin: 22px 0 32px;
  } 
`;
export { Container, Description };
