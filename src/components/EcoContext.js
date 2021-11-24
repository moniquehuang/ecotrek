import React from 'react';

export const ecoValues = {
    ori: {
      name: '',
      coords: '',
      latLng: {
        lat: '',
        lng: ''
      }
    },
    dest: {
      name: '',
      coords: '',
      latLng: {
        lat: '',
        lng: ''
      }
    },
    transport: {
      mode: ''
    }
  }
  export const MyContext = React.createContext(ecoValues);
  