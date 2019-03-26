import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

storiesOf('My Button', module)
    .add('default', () => <Button foo={''} />)
    .add('disabled', () => <Button disabled={true} />);
