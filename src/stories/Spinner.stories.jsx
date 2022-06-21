import React from 'react';

import { Spinner } from '../components/Spinner';

export default {
  title: 'Loaging/Spinner',
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const SpinnerPrimary = Template.bind({});
SpinnerPrimary.args = {
    type: 'border'
};

export const SpinnerSecondary = Template.bind({});
SpinnerSecondary.args = {
    variant: 'secondary'
};

export const SpinnerBorder = Template.bind({});
SpinnerBorder.args = {
    type: 'border'
};

export const SpinnerGrow = Template.bind({});
SpinnerGrow.args = {
    type: 'grow'
};

export const SpinnerSmall = Template.bind({});
SpinnerSmall.args = {
    size: 'small'
};

export const SpinnerMedium = Template.bind({});
SpinnerMedium.args = {
    size: 'medium'
};

export const SpinnerLarge = Template.bind({});
SpinnerLarge.args = {
    size: 'large'
};
