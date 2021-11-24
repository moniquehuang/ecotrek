import React, {useState} from 'react';
import H from "@here/maps-api-for-javascript";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from './EcoContext';

export default class Map extends React.Component {
  static contextType = MyContext;
    constructor(props) {
      super(props);
      // the reference to the container
      this.ref = React.createRef();
      // reference to the map
      this.map = null;
      const { geometry, setGeometry } = this.props;
    }
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_HERE;
      const context = this.context;
      this.setState({ ori: context.ori, dest: context.dest, transport: context.transport, carbon: context.carbon});
      if (!this.map) {
        // instantiate a platform, default layers and a map as usual
        const platform = new H.service.Platform({
          apikey: API_KEY
        });
        const layers = platform.createDefaultLayers();
        const map = new H.Map(
          this.ref.current,
          layers.vector.normal.map,
          {
            pixelRatio: window.devicePixelRatio,
            padding: {top: 100, left: 100, bottom: 100, right: 100}
          }
          );
          var ui = H.ui.UI.createDefault(map, layers);
        ui.getControl('zoom');
        // Create the parameters for the routing request:
        var routingParameters = {
          // The routing mode:
          'mode': 'fastest;car;',
          // The start point of the route:
          'waypoint0': `geo!${context.ori.coords}`,
          // The end point of the route:
          'waypoint1': `geo!${context.dest.coords}`,
          // To retrieve the shape of the route we choose the route
          // representation mode 'display'
          'representation': 'display'
        };

        // Define a callback function to process the routing response:
        var onResult = function(result) {
          var route,
            routeShape,
            startPoint,
            endPoint,
            linestring;
          if(result.response.route) {
          route = result.response.route[0];
          routeShape = route.shape;

          linestring = new H.geo.LineString();

          routeShape.forEach(function(point) {
            var parts = point.split(',');
            linestring.pushLatLngAlt(parts[0], parts[1]);
          });

          startPoint = route.waypoint[0].mappedPosition;
          endPoint = route.waypoint[1].mappedPosition;

          var routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: 3 }
          });

          var startMarker = new H.map.Marker({
            lat: startPoint.latitude,
            lng: startPoint.longitude
          });

          var endMarker = new H.map.Marker({
            lat: endPoint.latitude,
            lng: endPoint.longitude
          });

          map.addObjects([routeLine, startMarker, endMarker]);

          map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
          }
        };

        var router = platform.getRoutingService();

        router.calculateRoute(routingParameters, onResult,
          function(error) {
            alert(error.message);
          });
        this.map = map;
      }
    }
  
    render() {
      return (
        <div className="App">
          <div className='Background'>
          <div className='Background-image'>
            <header className='App-header'>
              <h1 className='title'>Ecotrek</h1>
            </header>
            <div className='page'>
              <div className='map'
                style={{ width: '500px', height:'500px' }}
                ref={this.ref}
              />
              <div className='Route-details'>
                Your journey to {this.context.ori.name}<br/>from {this.context.dest.name}<br/>by {this.context.transport.mode}<br/>will produce {this.props.geometry[0].summary.co2Emission} kilograms of carbon.
              </div>
            </div>
            </div>
          </div>
        </div>
      )
    }
  }