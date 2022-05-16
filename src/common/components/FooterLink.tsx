import React from 'react';

const FooterLink = (props: any) => {
  const { href, ico, alt } = props;
  return (
    <a href={href} style={{ lineHeight: 'initial', marginRight: '10px' }}>
      <img src={ico} alt={alt} />
    </a>
  );
};

export default FooterLink;
