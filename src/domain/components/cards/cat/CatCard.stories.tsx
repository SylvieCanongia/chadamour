import type { Meta, StoryObj } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mock';

const meta: Meta<typeof CatCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'templates/CatCard',
  component: CatCard,
};

export default meta;

type Story = StoryObj<typeof CatCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Card: Story = {
  args: {
    ...mockCatCardProps.base,
  } as ICatCard,
};
