import React from 'react';
import { Images } from '../../config';

const Logo = ({ size }) => {
  return (
    <>
      {size == 'sm' && (
        <img className="logo-img" src={Images.logoImg} width="60px" />
      )}
      {size == 'md' && (
        <img className="logo-img" src={Images.logoImg} width="80px" />
      )}
      {size == 'lg' && (
        <img className="logo-img" src={Images.logoImg} width="130px" />
      )}
    </>
  );
};

export default Logo;
