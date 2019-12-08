import React, { Fragment } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import WithHeaderLayout from "./layout/WithHeaderLayout";
const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'cereal';
    src: url('/Airbnb_Cereal-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    /* padding: 0; */
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'cereal';
    background: #F7FAFC;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'cereal'; }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/u/:userId"]}>
              <WithHeaderLayout>
                <Route exact path="/" component={Landing} />
                <Route exact path="/u/:userId" component={Profile} />
              </WithHeaderLayout>
            </Route>
            <Route exact path="/login" component={Login} />
            <Route path="*" component={()=>(<div>Umm, this url doesn't exist</div>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
