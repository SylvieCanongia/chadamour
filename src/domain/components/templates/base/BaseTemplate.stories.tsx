import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mock';

const meta: Meta<typeof BaseTemplate> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
};

export default meta;

type Story = StoryObj<typeof BaseTemplate>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Template: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate,
};
