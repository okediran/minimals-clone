import React from 'react';
import { Menu, Paper, styled } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  height?: string;
  actions?: React.ReactNode;
  anchorEl:any;
  width?:string;
}

const ModalContainer = styled(Menu)`
  && {
    .MuiMenu-paper {
      background-color: #ffff; 
    }
    .MuiList-root {
      padding: 0
    }
  }
`;

const CustomMenu: React.FC<ModalProps> = ({ isOpen, onClose, actions,anchorEl,width,height }) => {

  return (
    <ModalContainer
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {actions && (
        <Paper sx={{width, background:'white',height}}>
          {actions}
        </Paper>
      )}
    </ModalContainer>
  );
};

export default CustomMenu;
