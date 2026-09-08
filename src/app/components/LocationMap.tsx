import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/** Mapa lokality. Načítá se líně až při doscrollování ke kontaktu (viz App.tsx). */
export default function LocationMap() {
  return (
    <MapContainer
      center={[50.1263355, 14.108134]}
      zoom={17}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <CircleMarker
        center={[50.1262367, 14.1089158]}
        radius={8}
        pathOptions={{ color: '#2d5016', fillColor: '#4a7c2c', fillOpacity: 0.9 }}
      >
        <Popup>Parcela č. 3830/4</Popup>
      </CircleMarker>
      <CircleMarker
        center={[50.1264344, 14.1073522]}
        radius={8}
        pathOptions={{ color: '#2d5016', fillColor: '#4a7c2c', fillOpacity: 0.9 }}
      >
        <Popup>Parcela č. 3886/6</Popup>
      </CircleMarker>
    </MapContainer>
  );
}
