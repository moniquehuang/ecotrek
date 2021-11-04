import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Map from './map'
import UserForm from './UserForm'

function App() {
  const [geometry, setGeometry] = useState(null);
  return(
    <>
      {!geometry && <UserForm setGeometry={setGeometry}></UserForm>}
      {geometry && <Map geometry={geometry}/>}
    </>
  )
}


export default App;