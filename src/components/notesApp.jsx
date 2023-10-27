import React, { Fragment } from 'react';
import AppHeader from './header/appHeader';
import AppBody from './body/appBody';

function NotesApp() {
  return (
    <Fragment>
      <AppHeader />
      <AppBody />
    </Fragment>
  );
}

export default NotesApp;
