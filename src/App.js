import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Map from './map'
import UserForm from './UserForm'
import { ecoValues, MyContext } from './EcoContext';

function App() {
  const [geometry, setGeometry] = useState(null); //
  
  return(
    <>
      <MyContext.Provider value={ecoValues}>
        {!geometry && <UserForm setGeometry={setGeometry} ></UserForm>}
        {geometry && <Map geometry={geometry} />}
      </MyContext.Provider>
    </>
  )
}


export default App;