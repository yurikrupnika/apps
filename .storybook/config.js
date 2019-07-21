// import './addons';
import { configure } from '@storybook/react';

const req = require.context('../', true, /\.stories\.jsx$/, 'lazy');

const loadStories = () => req.keys().forEach(filename => {
    req(filename);
});

configure(loadStories, module);
