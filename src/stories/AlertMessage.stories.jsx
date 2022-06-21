import React from 'react';

import { AlertMessage } from '../components/alerts/AlertMessage';

export default {
  title: 'Alerts/AlertMessage',
  component: AlertMessage,
};

const Template = (args) => <AlertMessage {...args} />;

export const AlertPrimary = Template.bind({});
AlertPrimary.args = {
    variant: 'primary'
};

export const AlertSecondary = Template.bind({});
AlertSecondary.args = {
    variant: 'secondary',
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    variant: 'success',
};

export const AlertDanger = Template.bind({});
AlertDanger.args = {
    variant: 'danger',
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    variant: 'warning',
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
    variant: 'info',
};


export const AlertWithMessage = Template.bind({});
AlertWithMessage.args = {
    message: 'Esto es una alerta con texto',
};



