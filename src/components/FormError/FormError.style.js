import styled from 'styled-components';
import { colors, getTypographyFontStyle } from '../../styles/global.style';

import Icon from '../Icon/Icon';

const FormFieldErrorMessage = styled.span`
    padding-top: 2px;
    color: ${colors.danger};
    ${getTypographyFontStyle({ variant: 'body2', weight: 400 })};
`;

const FormFieldErrorIcon = styled(Icon)`
    vertical-align: middle;
    margin-right: 8px;
`;

const FormFieldError = styled.div`
    margin-top: 12px;
`;

export {
  FormFieldErrorMessage,
  FormFieldErrorIcon,
  FormFieldError,
};
