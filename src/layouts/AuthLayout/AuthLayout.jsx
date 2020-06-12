import React from "react";
import { Footer } from "../Components/index";

const AuthLayout = ({ children, ...rest }) => (
  <div>
    <div>{children}</div>
    <div>
      <Footer />
    </div>
  </div>
);

export default AuthLayout;
