import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import {LastNameInputField }from "../components/InputField/InputField.stories"
import {FirstNameInputField } from "../components/InputField/InputField.stories"
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <div>
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section>
      <h2>{user ? "Log Out" : "Log In"}</h2>
      </section>
   </article>
     <FirstNameInputField label={"First name:"} isMode="default"/>
     <LastNameInputField label={"Last name:"} isMode="default" />
  </div>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
