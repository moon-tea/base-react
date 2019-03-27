import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import QuestionList from '../components/QuestionList';

const noop = () => {};

storiesOf('My QuestionList', module)
    .addDecorator(StoryRouter())
    .add('default', () => <QuestionList />);
