import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

const noop = () => {};

storiesOf('My Button', module)
    .add('default', () => <Button foo={''} clickFn={noop} />)
    .add('disabled', () => <Button disabled={true} clickFn={noop} />);
