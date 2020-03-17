import React from 'react';
import Footer from '../Components/Footer/Footer';

const AuthLayout = ({ children, ...rest }) => (
  <div>
    <div>{children}</div>
    <div><Footer /></div>
  </div>
);

export default AuthLayout;
