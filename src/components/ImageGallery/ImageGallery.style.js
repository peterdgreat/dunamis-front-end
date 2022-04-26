/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Row = styled.div`
 flex-wrap: wrap;
  padding: 0 4px;
  display: flex;
`;
const Col = styled.div`
   flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  align-items: center;
`;

export { Row, Col };
