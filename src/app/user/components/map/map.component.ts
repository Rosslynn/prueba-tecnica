import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  mapbox = (mapboxgl as typeof mapboxgl);
  map!: mapboxgl.Map;
  marker!: mapboxgl.Marker;
  style = 'mapbox://styles/mapbox/streets-v11';
  center: [number, number] = [-75.6017496, 6.2394633];
  geolocation!: mapboxgl.GeolocateControl;
  zoom = 15;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Se inicializa el mapa
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: this.center
    });
    // Se crea el marcador que se utilizará
    this.marker = new mapboxgl.Marker({
      draggable: false
    });
    //Se le dice que se acomode a su contenedor
    this.map.on('load', () => {
      this.map.resize();
    });
    this.map.setMaxZoom(18);
    this.navigationControl();
    this.geolocateControl();
  }

  /**
   * Función que lanza el método de geolocalizar
   */
  geolocate() {
    this.geolocation.trigger();
  }

  /**
   * Función para añadir controles de navegación al mapa
   */
  navigationControl() {
    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true
    });
    this.map.addControl(nav, 'top-left');
  }

  /**
   * Función que crea el control de geolocalización
   */
  geolocateControl() {
    this.geolocation = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      showUserLocation: false,
      trackUserLocation: true,
      showUserHeading: true,

    });
    this.map.addControl(this.geolocation);
    this.geolocation.on('geolocate', (e: any) => {
      const { coords } = e;
      const { longitude, latitude } = coords;
      this.center = [longitude, latitude];
      this.setMarker();
    });
  }

  /**
   * Función para añadir un marcador al mapa
   */
  setMarker() {
    this.marker
      .setLngLat(this.center)
      .setPopup(
        new mapboxgl.Popup().setHTML(
          ` <strong>Longitud: </strong> ${this.center[0]} <br>
          <strong>Latitud: </strong> ${this.center[1]}
        `))
      .addTo(this.map);
    this.marker.togglePopup();
  }
}

