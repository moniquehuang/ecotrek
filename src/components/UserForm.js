import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import Select from 'react-select'
import { MyContext } from './EcoContext';

export default function UserForm({setGeometry}) {
  const API_KEY = process.env.REACT_APP_HERE;
  const {ori, dest, transport, carbon, saplings} = useContext(MyContext);

  const options = [
    { value: 'pedestrian', label: 'On Foot'},
    { value: 'car', label: 'Car'},
    { value: 'van', label: 'Light Truck/Van'},
    { value: 'truck', label: 'Truck'},
    { value: 'motorcycle', label: 'Motorcycle'},
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
    ori.name = loc;
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
    dest.name = loc;
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
    transport.value = form.vehicle;
    let engine, consumption; //consumption in units of liters/100 km
    let route;
    if(form.vehicle === 'car') {
      engine = 'gasoline';
      consumption = 9.72;
    }
    else if(form.vehicle === 'truck') {
      engine = 'diesel';
      consumption = 36.19;
    }
    else if(form.vehicle === 'scooter') {
      engine = 'gasoline';
      consumption = 3.36;
    }
    else if(form.vehicle === 'motorcycle') {
      transport.value = 'scooter';
      engine = 'gasoline';
      consumption = 5.35;
    }
    else if(form.vehicle === 'van') {
      transport.value = 'car';
      engine = 'gasoline';
      consumption = 13.44;
    }
    else if(form.vehicle === 'pedestrian') {
      engine = 'electric';
      consumption = 0;
    }
    axios.get(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${ori.coords}&waypoint1=${dest.coords}&mode=fastest;${transport.value};traffic:enabled&departure=now&apiKey=${API_KEY}&vehicletype=${engine},${consumption}&routesummarytype=Co2Emission`)
      .then(res => {
        route = res.data.response.route;
        carbon.total = route[0].summary.co2Emission;
        saplings.value = Math.round(route[0].summary.co2Emission * 0.01654); //tree seedlings grown for 10 years
        setGeometry(route);
      })
  }

  const handleChange = ({ target }) => {
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
    <div className='App'>
      <div className='Background'>
      <div className='Background-image'>
      <header className='App-header'>
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
        <div className='submit' style={{marginTop: '10%'}}>
          <Button 
            variant='success'
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