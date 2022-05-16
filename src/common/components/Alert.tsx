import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface AlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Alert = ({ isOpen, message, onClose }: AlertProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title" sx={{ color: '#4A4B57' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InfoIcon sx={{ color: '#B591FE' }} />
          안내
        </Box>
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
        <Button onClick={onClose} sx={{ color: '#4A4B57' }}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
