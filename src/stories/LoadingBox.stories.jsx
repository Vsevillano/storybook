import React from 'react';

import { LoadingBox } from '../components/LoadingBox';

export default {
  title: 'Example/LoadingBox',
  component: LoadingBox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <LoadingBox {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

export const LoadingBoxTrue = Template.bind({});
LoadingBoxTrue.args = {
    variant: 'primary'
};
