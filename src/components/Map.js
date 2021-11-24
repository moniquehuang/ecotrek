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
      const { geometry } = this.props;
    }
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_HERE;
      const context = this.context;
      this.setState({ ori: context.ori, dest: context.dest });
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
        const waypoints = this.props.geometry[0].waypoint;
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
          // Pick the first route from the response:
          route = result.response.route[0];
          // Pick the route's shape:
          routeShape = route.shape;

          // Create a linestring to use as a point source for the route line
          linestring = new H.geo.LineString();

          // Push all the points in the shape into the linestring:
          routeShape.forEach(function(point) {
            var parts = point.split(',');
            linestring.pushLatLngAlt(parts[0], parts[1]);
          });

          // Retrieve the mapped positions of the requested waypoints:
          startPoint = route.waypoint[0].mappedPosition;
          endPoint = route.waypoint[1].mappedPosition;

          // Create a polyline to display the route:
          var routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: 3 }
          });

          // Create a marker for the start point:
          var startMarker = new H.map.Marker({
            lat: startPoint.latitude,
            lng: startPoint.longitude
          });

          // Create a marker for the end point:
          var endMarker = new H.map.Marker({
            lat: endPoint.latitude,
            lng: endPoint.longitude
          });

          // Add the route polyline and the two markers to the map:
          map.addObjects([routeLine, startMarker, endMarker]);

          // Set the map's viewport to make the whole route visible:
          map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
          }
        };

        // Get an instance of the routing service:
        var router = platform.getRoutingService();

        // Call calculateRoute() with the routing parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):
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
                Your journey to {this.context.ori.name}<br/>from {this.context.dest.name}<br/>by {this.props.geometry[0].mode.transportModes[0]}<br/>will produce {this.props.geometry[0].summary.co2Emission} kilograms of carbon.
              </div>
            </div>
            <Button 
              variant="success"
              onClick={ () => {
                
              }}
              type='submit'
          >Reset</Button>
          </div>
          </div>
        </div>
      )
    }
  }