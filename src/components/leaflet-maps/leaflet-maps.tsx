import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { mapTiler } from "../../shared/utils/leaflet-maptiler";
import L from "leaflet";
import marker from "../../assets/icons/marker-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store/store";

const LeafletMaps = () => {
  const regionalData = useSelector(
    (state: RootState) => state.covid.covidPatientStats?.data.regional
  );
  const [center, setCenter] = useState({ lat: 20.5937, lng: 78.969 });
  const zoomLevel = 5;
  // const mapRef = useRef();

  const mockCovidMapData = [
    {
      loc: "Andaman and Nicobar Islands",
      confirmedCasesIndian: 10039,
      coords: { lat: 11.6234, lng: 92.7265 },
    },
    {
      loc: "Delhi",
      confirmedCasesIndian: 1899071,
      coords: { lat: 28.6139, lng: 77.209 },
    },
    {
      loc: "Maharashtra",
      confirmedCasesIndian: 7880334,
      coords: { lat: 19.3014, lng: 75.7139 },
    },
  ];
  const markerIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [45, 45],
  });
  return (
    <MapContainer
      center={center}
      zoom={zoomLevel}
      //   ref={mapRef}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url={mapTiler.url} attribution={mapTiler.attribution} />
      {regionalData &&
        regionalData.map((location) => (
          <Marker
            key={location.loc}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
          >
            <Popup>
              <strong>{location.loc}</strong>
              <br />
              Confirmed Cases: {location.confirmedCasesIndian}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default LeafletMaps;
