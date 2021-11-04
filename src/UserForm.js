import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select'

export default function UserForm({setGeometry}) {
  const API_KEY = process.env.REACT_APP_HERE;

  const options = [
    { value: 'pedestrian', label: 'On Foot'},
    { value: 'car', label: 'Car'},
    { value: 'truck', label: 'Truck'},
    { value: 'bicycle', label: 'Bicycle'},
    { value: 'scooter', label: 'Scooter'}
  ]
  
  const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: 'white'}),
      option: (styles, { isDisabled, isFocused, isSelected}) => {
        const color = 'black';
        return {
          ...styles,
          color: '#000000',
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? '#8FC886'
            : isFocused
            ? '#8FC886'
            : undefined,
  
          cursor: isDisabled ? 'not-allowed' : 'default',
    
          ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled
            ? isFocused
                ? '#76A86E'
                : '#8FC886'
            : undefined
            ? isSelected
              ? '#76A86E'
              : '#8FC886'
            : undefined,
          },
        };
      },
      input: (styles) => ({ ...styles}),
      placeholder: (styles) => ({ ...styles}),
      singleValue: (styles) => ({ ...styles, color: 'black'}),
  };

  const [form, setForm] = useState({});
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  //use location name to get coordinates for routing
  function GetOrigin(loc) {
    let location;
    let coords = '';
    axios.get(`https://geocode.search.hereapi.com/v1/geocode?apikey=${API_KEY}&q=${loc}`)
      .then(res => {
        //console.log(res.data.items[0]);
        coords = (res.data.items[0].position['lat'] + ',' + res.data.items[0].position['lng']); //string of coordinates
        setOrigin(coords);
      })
  }

  function GetDestination(loc) {
    let location;
    let coords = '';
    axios.get(`https://geocode.search.hereapi.com/v1/geocode?apikey=${API_KEY}&q=${loc}`)
      .then(res => {
        location = res.data;
        //console.log(res.data.items[0].position['lat']);
        coords = (res.data.items[0].position['lat'] + ',' + res.data.items[0].position['lng']); //string of coordinates
        setDestination(coords);
      })
  }

  useEffect(() => {
    if(origin && destination) {
      console.log(origin);
      console.log(destination);
    }
  }, [origin, destination])

  //find a route from origin, destination, and transportation mode
  function CalcRoute() {
    let route;
    axios.get(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${origin}&waypoint1=${destination}&mode=fastest;${form.vehicle};traffic:enabled&departure=now&apiKey=${API_KEY}&vehicletype=gasoline,5&routesummarytype=Co2Emission`)
      .then(res => {
        route = res.data.response.route;
        console.log(route);
        setGeometry(route);
      })
  }

  const handleChange = ({ target }) => {
    console.log(target.name);
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    if(name === 'origin') {
      GetOrigin(value);
    } else if(name === 'destination') {
      GetDestination(value);
    }
  };

  return (
    <>
    <div className="App">
      <div className='Background'>
      <div className='Background-image'>
      <Navbar className='navbar' variant="light">
        <Container>
        <Navbar.Brand href="#home">Ecotrek</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#carbon">Resources</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <header className="App-header">
      <h1 className='title'>Ecotrek</h1>
      <h2 className='description'>Embark on an eco-conscious journey<br/>by tracking your carbon emissions<br/>from a start and end point!</h2>
      
        <div className='origin'>
          <input
            onBlur = {handleChange}
            name='origin'
            type='text'
            placeholder='Origin'
          />
        </div>
        <div className='destination'>
          <input
            onBlur = {handleChange}
            name='destination'
            type='text'
            placeholder='Destination'
          />
        </div>
        <div className='dropdown' style={{marginTop: '20px'}}>
          <Select 
            onChange = {(event) => setForm(prevForm => ({...prevForm, vehicle: event.value}))}
            name='transportMode'
            type='text'
            styles={colourStyles}
            options={options}
            placeholder={<div>Transportation Mode</div>}
          />
        </div>
        <div className='submit'>
          <Button 
            variant="success"
            onClick={ () => {
              CalcRoute();
            }}
            type='submit'
          >Submit</Button>
        </div>
    </header>
    </div>
    </div>
    </div>
    </>
)}