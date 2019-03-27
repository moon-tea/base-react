import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import TestContainer from '../containers/TestContainer';

storiesOf('Test Container', module)
    .addDecorator(StoryRouter())
    .add('default', () => <TestContainer />);
