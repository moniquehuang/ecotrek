import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import Select from 'react-select'
import { MyContext } from './EcoContext';

export default function UserForm({setGeometry}) {
  const API_KEY = process.env.REACT_APP_HERE;
  const {ori, dest} = useContext(MyContext);

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

  //use location name to get coordinates for routing
  function GetOrigin(loc) {
    ori.name=loc;
    let coords = '';
    axios.get(`https://geocode.search.hereapi.com/v1/geocode?apikey=${API_KEY}&q=${loc}`)
      .then(res => {
        coords = (res.data.items[0].position['lat'] + ',' + res.data.items[0].position['lng']); //string of coordinates
        ori.coords=coords;
        ori.latLng.lat=res.data.items[0].position['lat'];
        ori.latLng.lng=res.data.items[0].position['lng'];
      })
  }

  function GetDestination(loc) {
    dest.name=loc;
    let coords = '';
    axios.get(`https://geocode.search.hereapi.com/v1/geocode?apikey=${API_KEY}&q=${loc}`)
      .then(res => {
        coords = (res.data.items[0].position['lat'] + ',' + res.data.items[0].position['lng']); //string of coordinates
        dest.coords=coords;
        dest.latLng.lat=res.data.items[0].position['lat'];
        dest.latLng.lng=res.data.items[0].position['lng'];
       })
  }

  //find a route from origin, destination, and transportation mode
  function CalcRoute() {
    let route;
    axios.get(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${ori.coords}&waypoint1=${dest.coords}&mode=fastest;${form.vehicle};traffic:enabled&departure=now&apiKey=${API_KEY}&vehicletype=gasoline,5&routesummarytype=Co2Emission`)
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
      <header className="App-header">
        <h1 className='title'>Ecotrek</h1>
        <h2 className='description'>Embark on an eco-conscious journey<br/>by tracking your carbon emissions<br/>from a start and end point!</h2>
      </header> 
      <div className='menu'>
        <div className='instructions'>Enter your travel details to view the<br/>estimated carbon emissions for your route.</div>
        <div className='origin' style={{marginTop: '1.5%'}}>
          <input
            onBlur = {handleChange}
            name='origin'
            type='text'
            placeholder='Origin'
          />
        </div>
        <div className='destination' style={{marginTop: '1.5%'}}>
          <input
            onBlur = {handleChange}
            name='destination'
            type='text'
            placeholder='Destination'
          />
        </div>
        <div className='dropdown' style={{marginTop: '1.5%'}}>
          <Select 
            onChange = {(event) => setForm(prevForm => ({...prevForm, vehicle: event.value}))}
            name='transportMode'
            type='text'
            styles={colourStyles}
            options={options}
            placeholder={<div>Transportation Mode</div>}
          />
        </div>
        <div className='submit' style={{marginTop: '1.5%'}}>
          <Button 
            variant="success"
            onClick={ () => {
              CalcRoute();
            }}
            type='submit'
          >Submit</Button>
        </div>
      </div> 
    </div>
    </div>
    </div>
    </>
)}