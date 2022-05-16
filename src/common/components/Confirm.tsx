import React, { useEffect, useState } from 'react';
import {
  Icon,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { COLOR_DARK_GREY, COLOR_VIOLET_30 } from '../styles/Color';

interface ConfirmProps {
  isOpen: boolean;
  onClose?: () => void;
  okFunction: () => void;
  message: string;
  className?: any;
}

const Confirm = ({
  isOpen,
  onClose,
  okFunction,
  message,
  className,
}: ConfirmProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
    setOpen(false);
  };

  const onClickOkButton = () => {
    okFunction();
    setOpen(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
      className={className}
      sx={{ '& .MuiPaper-root': { borderRadius: 4 } }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          '&.MuiDialogTitle-root': {
            display: 'flex',
            alignItems: 'center',
            color: COLOR_DARK_GREY,
            '& .MuiIcon-root': {
              color: COLOR_VIOLET_30,
              mr: 6,
            },
          },
        }}
      >
        <Icon>info</Icon>
        안내
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontWeight: 400 }}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={handleClose} sx={{ color: '#4A4B57' }}>
          취소
        </Button>
        <Button
          onClick={onClickOkButton}
          autoFocus
          variant="contained"
          disableElevation
          color="primary"
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
