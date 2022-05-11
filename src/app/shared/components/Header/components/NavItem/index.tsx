import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'app/shared/components/Link';
import { NavItemDiv } from './styles';

interface NavItemProps {
  label: string;
  Icon: any;
  to: string;
  setCurrentLink: (clickedLink: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ label, Icon, to, setCurrentLink }) => (
  <NavItemDiv>
    <Link to={to} replace={true} onClick={(e) => setCurrentLink(label)}>
      <Icon title={label} className='itemIcon' width='30px' height='30px' />
    </Link>
  </NavItemDiv>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  setCurrentLink: PropTypes.func.isRequired,
};
