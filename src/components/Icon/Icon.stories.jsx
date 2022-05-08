/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';

import Icon from './Icon';
import * as IconList from './IconList';

const IconListKeys = Object.keys(IconList);

export default {
  title: 'Design System/Atoms/Icons',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
    stroke: { control: 'color' },
  },
};

const Template = (args) => (
  <>
    {
        IconListKeys.map((val, i) => (
          <div
            key={i}
            style={{
              display: 'inline-block', padding: 8, margin: 8, textAlign: 'center',
            }}
          >
            <Icon {...args} name={val} />
            {' '}
            <p>{val}</p>
          </div>
        ))
      }

  </>

);

export const Outline = Template.bind({});

Outline.args = {
  fill: 'white',
  stroke: '#27AE60',
  size: '48',
};

export const Fill = Template.bind({});

Fill.args = {
  fill: '#27AE60',
  stroke: '#27AE60',
  size: '48',
};
