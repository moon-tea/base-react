import React from 'react';

import { storiesOf } from '@storybook/react';

import QuestionList from '../components/QuestionList';

const noop = () => {};

storiesOf('My QuestionList', module).add('default', () => <QuestionList />);
