import React from 'react';

import { storiesOf } from '@storybook/react';

import MultipleChoice from '../components/MultipleChoice';

storiesOf('My MultipleChoice', module).add('default', () => <MultipleChoice match={{ params: { id: 2 } }} />);
