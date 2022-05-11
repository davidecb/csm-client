import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Message, MessageContainer } from './styles';


interface WelcomeMessageProps {
  user: any;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  user,
}) => {
  return (
    <MessageContainer>
      {user && (
        <Message>
          Bienvenido {user.name}
        </Message>
      )}
    </MessageContainer>
  );
};

WelcomeMessage.propTypes = {
  user: PropTypes.any.isRequired,
};
