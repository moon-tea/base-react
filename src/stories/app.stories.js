import React from 'react';

import { storiesOf } from '@storybook/react';

import App from '../App';

storiesOf('App', module)
    .add('default', () => <App />)
    .add('App with title', () => <App title={'My World'} />);
