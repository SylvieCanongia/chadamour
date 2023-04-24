import type { Meta, StoryObj } from '@storybook/react';
import Hero, { IHero } from './Hero';
import { mockHeroProps } from './Hero.mock';

const meta: Meta<typeof Hero> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'templates/Hero',
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const HeroHeader: Story = {
  args: {
    ...mockHeroProps.base,
  } as IHero,
};
