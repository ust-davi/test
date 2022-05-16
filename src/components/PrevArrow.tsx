import React from 'react';
import { Icon } from '@mui/material';

const PrevArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <Icon>arrow_back_ios</Icon>
  </div>
);

export default PrevArrow;
