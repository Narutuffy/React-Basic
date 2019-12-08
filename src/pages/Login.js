import React, { Fragment } from 'react';
import {Button} from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => (
  <Fragment>
    <div>This is Login Airbnb page</div>
    <a href="/auth/google">Google</a>
    <a href="/auth/facebook">Facebook</a>
    <a href="/auth/linkedin">Linkedin</a> 
  </Fragment>
  
);

export default Login;