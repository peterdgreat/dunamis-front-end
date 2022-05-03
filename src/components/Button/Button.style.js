import { colors, getTypographyFontStyle, device } from '../../styles/global.style';

import styled, { css } from "styled-components";

import { Icon } from '../Icon/Icon';

const formatType = props => `${props.format}-${props.primary?'primary':'secondary'}`

const buttonBackgroundColors = {
    'contained-primary': colors.primary,
    'outlined-primary': colors.transparent,
    'text-primary': colors.transparent,
    'contained-secondary': colors.secondary,
    'outlined-secondary': colors.transparent,
    'text-secondary': colors.transparent,
};

const buttonColors = {
    'contained-primary': colors.light,
    'outlined-primary': colors.primary,
    'text-primary': colors.primary,
    'contained-secondary': colors.light,
    'outlined-secondary': colors.secondary,
    'text-secondary': colors.secondary,
};

const buttonBorderColors = {
    'outlined-primary': colors.primary,
    'outlined-secondary': colors.secondary,
};

const buttonFontSize = {
    'small': getTypographyFontStyle({ variant:'button2', weight: 400}),
    'medium': getTypographyFontStyle({ variant:'button2', weight: 400}),
    'large': getTypographyFontStyle({ variant:'button1', weight: 400})
}

const buttonPadding = {
    'sm-small': `12px 20.5px`,
    'sm-medium': `12px 20.5px`,
    'sm-large': `12px 34px`,
    'md-small': `10px 30px`,
    'md-medium': `10px 30px`,
    'md-large': `10px 57.5px`,
}

export const ButtonIcon = styled(Icon)`
    stroke:${props => buttonColors[formatType(props)]};
    vertical-align: middle;
    margin-left: ${props => props.end ? '8px': 0};
    margin-right: ${props => props.start ? '8px': 0};
    fill: ${colors.light};
    margin-top: -2px;
`;

export const PrimaryButton = styled.button`
    cursor: ${props => props.disabled ? 'default':'pointer'};
    border-radius: 4px; 
    background-color: ${props => props.disabled ? colors.lightGrey: buttonBackgroundColors[formatType(props)]};
    color: ${props => buttonColors[formatType(props)]};
    display: inline-block;
    ${props => buttonFontSize[props.size]};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid ${props => buttonBorderColors[formatType(props)] || 'transparent'};
    padding: ${props => buttonPadding[`sm-${props.size}`]};
    @media ${device.md} {
        padding: ${props => buttonPadding[`md-${props.size}`]};
    }
    &&:hover {
        ${props => !props.disabled && css`
            background-color: ${props => props.primary ? colors.primaryDark : colors.secondary};
        `}
        color: ${colors.light};
        ${ButtonIcon}{
            fill: ${colors.light};
            stroke: ${colors.light};
        }
    }
`
