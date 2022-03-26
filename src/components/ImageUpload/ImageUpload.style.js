import styled from 'styled-components';
// import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

const ImageUploadContainer = styled.div`
    width: 220px;
    height: 220px;
    border: 1px dashed;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #f5f5f5;
    }
    @media screen and (min-width: 992px) {
        width: 300px;
        height: 300px;
    }
`;

const ImageUploadLabel = styled.span`
    padding: 18px 0;
`;
const ImageUploadDescription = styled.span`
    color: #8c8c8c;
`;

const ImageUploadPreview = styled.img`
    width: 220px;
    height: 220px;
    @media screen and (min-width: 992px) {
        width: 300px;
        height: 300px;
    }
`;

export {
  ImageUploadContainer,
  ImageUploadDescription,
  ImageUploadLabel,
  ImageUploadPreview,
};
