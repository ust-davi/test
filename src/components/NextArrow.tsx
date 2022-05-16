import React from 'react';
import { Icon } from '@mui/material';

const NextArrow = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <Icon>arrow_forward_ios</Icon>
  </div>
);

export default NextArrow;
