import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../../config';

const AppAlert = ({
  isOpen,
  onClose,
  alertHeader,
  alertBodyText,
  handleClick,
}) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{alertHeader}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{alertBodyText}</AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={onClose}>No</Button>
          <Button
            onClick={handleClick}
            bgColor={Colors.aquamarine}
            color={Colors.black}
            ml={3}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppAlert;
