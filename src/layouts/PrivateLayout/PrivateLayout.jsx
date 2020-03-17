import React from 'react';
import NavBar from '../Components/NavBar/Navbar';

const PrivateLayout = ({ children, ...rest }) => (
  <div>
    <div><NavBar /></div>
    <div>{children}</div>
  </div>
);

export default PrivateLayout;
