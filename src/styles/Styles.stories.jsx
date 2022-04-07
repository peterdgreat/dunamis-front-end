import React, { Fragment } from 'react';

import styled, { css } from "styled-components";
import { getTypographyFontStyle, colors } from './global.style';

const typoContainer = ({variant}) => css`
  ${getTypographyFontStyle({ variant})}
  padding: 10px;
`;

const Heading1 = styled.div`${typoContainer({ variant: 'h1' })}`;
const Heading2 = styled.div`${typoContainer({ variant: 'h2' })}`;
const Subtitle1 = styled.div`${typoContainer({ variant: 'subtitle1' })}`;
const Subtitle2 = styled.div`${typoContainer({ variant: 'subtitle2' })}`;
const Subtitle3 = styled.div`${typoContainer({ variant: 'subtitle3' })}`;
const Body1 = styled.div`${typoContainer({ variant: 'body1' })}`;
const Body2 = styled.div`${typoContainer({ variant: 'body2' })}`;
const Body3 = styled.div`${typoContainer({ variant: 'body3' })}`;
const Button1 = styled.div`${typoContainer({ variant: 'button1' })}`;
const Button2 = styled.div`${typoContainer({ variant: 'button2' })}`;
const Small = styled.div`${typoContainer({ variant: 'small' })}`;

const TypographyStyle = () => (
  <div>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <Subtitle3>Subtitle3</Subtitle3>
    <Body1>Body 1</Body1>
    <Body2>Body 2</Body2>
    <Body3>Body 3</Body3>
    <Button1>Button 1</Button1>
    <Button2>Button 2</Button2>
    <Small>small</Small>
    
  </div>
);

const DisplayColor = styled.div `
  display: inline-block;
  padding-top: 40px;
  background-color: ${props => props.color};
  width: 100px;
  height: 60px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  color: ${props => (props.color === colors.light) ? colors.dark : colors.light};
  margin: 10px;
  font-size: 14px;
  text-align: center;
`;

const ColorDiv = () => <Fragment>
  {
    Object.keys(colors).map((val, i) => (val !== 'transparent') ? <DisplayColor color={colors[val]}>{val}</DisplayColor> : '')
  }
</Fragment>

export default {
  title: 'Design System/Atoms/Style',
  component: TypographyStyle,
};


export const Typography  = () => <TypographyStyle />;

export const Colors = () => <ColorDiv/>;
