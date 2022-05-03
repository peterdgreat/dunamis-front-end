import styled from 'styled-components';
import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

const Heading = styled.h1`
  color: ${colors.primary};
  ${(props) => getTypographyFontStyle({ variant: (props.as === 'h2' ? 'subtitle2' : 'h1'), weight: 500 })};
  margin: 0 0 4px;
  @media ${device.md} {
    margin: 0 0 15px;
  }
`;
export default Heading;
