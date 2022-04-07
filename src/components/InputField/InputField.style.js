import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

import styled from "styled-components";
import { Icon } from '../Icon/Icon';


const CustomInput = styled.input`
    background: white;
    border-radius: 4px;
    border: 1px solid ${props => props.noBorder ? 'transparent' : '#454545'};
    padding: 12px 16px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 8px;
    ${getTypographyFontStyle({ variant: 'body3', weight: 400 })};
    &&:focus {
        border: 2px solid ${props => props.isError ? colors.danger : colors.primary};
        outline: none;
    }
    ${
        props => props.isError && `border-color: ${colors.danger};`
    }
    ${
        props => props.prefixIcon && `padding-left: 40px;`
    }
    @media ${device.md} {
        padding: 20px 16px;
        ${
            props => props.prefixIcon && `padding-left: 50px;`
        }
        
    }
    
`;


const InputLabel = styled.label`
    ${getTypographyFontStyle({ variant: 'body3', weight: 500 })};
`;

const InputFieldContainer = styled.div`
    position: relative;
`;

const DisplayIcon = styled(Icon)`
    fill:${colors.lightGrey};
    stroke:${colors.lightGrey};
    position: absolute;
    top: 20px;
    left: 16px;
    width: 14px;
    height: 14px;
    @media ${device.md} {
        top: 30px;
        width: 18px;
        height: 18px;
    }
`;

export {
    CustomInput,
    InputFieldContainer,
    InputLabel,
    DisplayIcon
}