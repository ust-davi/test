import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { makeStyles } from '@mui/styles';
import { COLOR_WHITE } from '../common/styles/Color';

interface UploadImageButtonProps {
  onChange: (e: any) => void;
  id: string;
  value: any;
  width?: number;
  height?: number;
  className?: any;
}

const UploadImageButton = ({
  onChange,
  id,
  value,
  width,
  height,
  className,
}: UploadImageButtonProps) => {
  const classes = useStyles();
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    if (value && value.length) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(value[0]);
    }
  }, [value]);

  return (
    <>
      <Button sx={{ padding: 0 }}>
        <label htmlFor={id} className={className}>
          {image ? (
            <img
              src={image}
              alt=""
              width={width}
              height={height}
              style={{ borderRadius: 8 }}
            />
          ) : (
            <CameraAltIcon />
          )}
        </label>
      </Button>

      <input
        type="file"
        id={id}
        onChange={onChange}
        accept="image/jpg,image/jepg,image/png"
        style={{ display: 'none' }}
      />
    </>
  );
};

export default UploadImageButton;

const useStyles = makeStyles({
  button: {
    border: '1px solid #d2d2d6 !important',
    backgroundColor: COLOR_WHITE,
    color: '#5a5b6a !important',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
