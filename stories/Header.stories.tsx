// Header.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = () => <Header/>;
