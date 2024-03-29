import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { SearchBar } from './components/layout/SearchBar';
import { AddBtn } from './components/layout/AddBtn';
import { AddLogModal } from './components/logs/AddLogModal';
import { EditLogModal } from './components/logs/EditLogModal';
import { Logs } from './components/logs/Logs';
import { AddTechModal } from './components/techs/AddTechModal';
import { TechListModal } from './components/techs/TechListModal';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
