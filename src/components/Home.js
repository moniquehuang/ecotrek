import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Map from './Map'
import UserForm from './UserForm'
import { ecoValues, MyContext } from './EcoContext';

function App() {
  const [geometry, setGeometry] = useState(null); 
  return(
    <>
      <MyContext.Provider value={ecoValues}>
        {!geometry && <UserForm setGeometry={setGeometry} ></UserForm>}
        {geometry && (
        <div>
        <Map geometry={geometry} setGeometry={setGeometry}/>
        <Button 
              variant='success'
              onClick={ () => {
                setGeometry(null);
              }}
              type='submit'
              style={{position: 'fixed',
                bottom: '30px',
                left: '50%'}}
            >Reset</Button> 
          </div>)}

      </MyContext.Provider>
    </>
  )
}


export default App;