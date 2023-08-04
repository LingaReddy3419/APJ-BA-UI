import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const NodeLocationsMap = () => {
  const defaultPosition = [17.3850,78.4867];
  const [currentPosition, setCurrentPosition] = React.useState(defaultPosition);
  const mapRef = React.useRef();

  const locations = [
    { position: [19.076090, 72.877426], title: 'Mumbai'   },
    { position: [12.9789  , 77.5917  ], title: 'Banglore' },
    { position: [17.3850  , 78.4867  ], title: 'Hyderabad'},
    { position: [13.0825  , 80.2750  ], title: 'Chennai'  },
  ];

  const customMarkerIcon = L.icon({
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div>
      <MapContainer ref={mapRef} center={defaultPosition} zoom={4} scrollWheelZoom={true} style={{ height: '250px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={customMarkerIcon}>
            <Popup>{location.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NodeLocationsMap;
