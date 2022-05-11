import * as PropTypes from 'prop-types';
import * as React from 'react';
import { NavItem } from '../NavItem';
import { NavListUl } from './styles';

interface NavListProps {
  items: { 
    role: string; 
    name: string;
    Icon: any;
    urlPath: string;  
  }[];
  setCurrentLink: (clickedLink: string) => void;
}

export const NavList: React.FC<NavListProps> = ({ items, setCurrentLink }) => {
  return (
    <NavListUl>
      {items.map(({ name, Icon, urlPath }, key) => (
        <li key={key}>
          <NavItem label={name} Icon={Icon} to={urlPath} setCurrentLink={setCurrentLink} />
        </li>
      ))}
    </NavListUl>
  );
};

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  setCurrentLink: PropTypes.func.isRequired,
};
