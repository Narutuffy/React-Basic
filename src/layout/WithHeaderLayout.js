import React from 'react';
import Header from "../components/Header";

const WithHeaderLayout = (props) => (
  <div>
    <Header/>
    {props.children}
  </div>
);

export default WithHeaderLayout;