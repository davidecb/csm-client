import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  min-width: 430px;
  padding: 20px;
  background: ${colors.background};
  opacity: 0.7;
  border-radius: 15px;
  box-shadow: 1px 1px 15px ${colors.golden_dark};
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  @media (hover: hover) {
    &:hover {
      opacity: 0.9;
      box-shadow: 1px 1px 15px ${colors.golden_poppy};
    }
  }
  @media (hover: none) {
    opacity: 0.95;
    box-shadow: 1px 1px 15px ${colors.golden_poppy};
  }

  @media (max-width: 500px) {
    min-width: 95%;
    margin-bottom: 10%;
    box-shadow: none;
  }

  @media (max-width: 420px) and (min-height: 740px) {
    margin-bottom: 30%;
  }
`;

export const Title = styled.h2`
  font-family:  londrinaSolidBlack; 
  position: relative;
  margin-top: 0px;
  text-align: center;
  font-size: 45px;
  color: ${colors.golden_poppy};
  text-shadow: 3px 3px 10px ${colors.basic_black};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const SpanError = styled.span`
  color: #f62d2d;
  font-family: LondrinaSolidRegular;
  font-size: 14px;
`;
