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
  const center = { lat: 20.5937, lng: 78.969 };
  const zoomLevel = 5;

  const markerIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [45, 45],
  });
  return (
    <MapContainer
      center={center}
      zoom={zoomLevel}
      style={{ height: "calc(100vh - 6rem", width: "75%" }}
    >
      <TileLayer url={mapTiler.url} attribution={mapTiler.attribution} />
      {regionalData &&
        regionalData.map((location) => (
          <Marker
            key={location.location}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
          >
            <Popup>
              <strong>{location.location}</strong>
              <br />
              Confirmed Cases: {location.totalCases}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default LeafletMaps;
