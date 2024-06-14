import React from 'react';
import { Images } from '../../config';

const Logo = ({ size }) => {
  return (
    <>
      {size == 'sm' && (
        <img className="logo-img" src={Images.logoImg} width="50px" />
      )}
      {size == 'md' && (
        <img className="logo-img" src={Images.logoImg} width="100px" />
      )}
      {size == 'lg' && (
        <img className="logo-img" src={Images.logoImg} width="150px" />
      )}
    </>
  );
};

export default Logo;
