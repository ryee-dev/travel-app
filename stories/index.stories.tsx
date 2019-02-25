import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { Input } from '../src/ui-components';
import { LoginInput } from '../src/pages/components/loginPage/LoginPageBody.css';
import { Button } from '../src/ui-components';

storiesOf('Input', module)
  .add('x-small', () => <LoginInput size={10} />)
  .add('small', () => <LoginInput size={25} />)
  .add('medium', () => <LoginInput size={50} />)
  .add('large', () => <LoginInput size={75} />);

storiesOf('Buttons', module)
  .add('primary', () => <Button color="brown">Primary</Button>);
