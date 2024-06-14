import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';

const Links = [
  { name: 'My Favorites', path: '/myfavorites' },
  { name: 'Create a Trip', path: '/createatrip' },
  { name: 'My Trips', path: '/mytrips' },
  { name: 'My Profile', path: '/profilesettings' },
  { name: 'Logout', path: '/logout' },
];

const ProfileIcon = ({ handleLogout }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={IconButton}
        icon={
          isOpen ? <CloseIcon /> : <IoPersonCircleOutline fontSize="40px" />
        }
        onClick={isOpen ? onClose : onOpen}
        size="lg"
        variant="ghost"
      />
      <MenuList>
        {Links.map((link) =>
          link.name === 'Logout' ? (
            <MenuItem key={link.name} onClick={handleLogout}>
              {link.name}
            </MenuItem>
          ) : (
            <MenuItem key={link.name} as={RouterLink} to={link.path}>
              {link.name}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default ProfileIcon;
