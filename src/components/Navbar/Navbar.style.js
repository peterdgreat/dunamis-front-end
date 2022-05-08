import styled from 'styled-components';

import { colors, getTypographyFontStyle } from '../../styles/global.style';

const NavItems = styled.div`
  text-decoration: none;
  ${getTypographyFontStyle({ variant: 'body1', weight: 500 })};
  color: ${colors.primary};
  margin-left: 80px;
  cursor: pointer;
  &:active {
    color: ${colors.secondary};
    font-weight: bold;
  }
  &:hover {
    color: ${colors.secondary};
  }
  @media screen and (max-width: 768px) {
    margin-left: 32px;
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

export default NavItems;
