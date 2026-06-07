import { MapContainer, Popup, Marker, TileLayer, Tooltip } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "./LeafletMap.css";

type projectLocationType = {
  lat: number;
  long: number;
  tooltip: string[];
  popup?: {
    name: string;
    apple: {
      name: string;
      url: string;
    };
    google: {
      name: string;
      url: string;
    };
  };
};

const projectLocations = [
  {
    lat: 51.51,
    long: -0.12,
    tooltip: ["Post Office Travel", "Chase"],
    popup: {
      name: `Post Office Travel`,
      apple: {
        name: "Apple App Store",
        url: "https://apps.apple.com/gb/app/post-office-travel/id1385844874",
      },
      google: {
        name: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=uk.co.postoffice.PostOfficeTravel&hl=en_GB&gl=US",
      },
    },
  },
  {
    lat: 40.7128,
    long: 74.006,
    tooltip: ["Necessary Clothing"],
  },
  {
    lat: 34.0522,
    long: -118.2437,
    tooltip: [
      "Sarcastic ME, O'woks LA, Great Roommates, Dashingly Different, Prosource Supply",
    ],
  },
  {
    lat: 42.6977,
    long: 23.3219,
    tooltip: ["Slim Kit"],
  },
];

const tileLayers = {
  openStreetMap: {
    style: "Standard Street Map",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  cartoDBPositron: {
    style: "CartoDB Positron (Light)",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  cartoDBDarkMatter: {
    style: "CartoDB Dark Matter",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  stadiaAlidadeSmooth: {
    style: "Stadia Alidade Smooth",
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  openTopoMap: {
    style: "OpenTopoMap (Topographic)",
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
};

export const LeafletMap = ({
  position = [51.51, -0.12],
}: {
  position?: LatLngExpression;
}) => {
  return (
    <div className="leaflet-map-page">
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={2}
          scrollWheelZoom={true}
          className="leaflet-map">
          <TileLayer
            attribution={tileLayers.openStreetMap.attribution}
            url={tileLayers.openStreetMap.url}
          />
          {Object.entries(projectLocations).map(
            ([key, { lat, long, tooltip, popup }]) => (
              <Marker key={key} position={[lat, long]}>
                <Tooltip>{tooltip}</Tooltip>
                {popup && (
                  <Popup>
                    {popup.name}{" "}
                    <div className="tooltip-container">
                      <a
                        href={popup.apple.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {popup.apple.name}
                      </a>
                      <a
                        href={popup.google.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {popup.google.name}
                      </a>
                    </div>
                  </Popup>
                )}
              </Marker>
            ),
          )}
        </MapContainer>
      </div>
    </div>
  );
};
