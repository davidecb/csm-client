import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Login } from '../../models/Login';

interface SubmitLoginButton {}

export const SubmitLoginButton: React.FC<SubmitLoginButton> = () => {
  return (
    <Button type='submit' >
      <span>
        Ingresar
      </span>
    </Button>
  );
};

SubmitLoginButton.propTypes = {};
