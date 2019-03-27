import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import * as App from './app.stories';
import * as MyButton from './button.stories.jsx';
import * as TestContainer from './testContainer.stories.jsx';
import * as QuestionList from './questionList.stories.jsx';
import * as MultipleChoice from './multipleChoice.stories.jsx';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
