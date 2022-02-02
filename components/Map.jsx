import { getCenter } from "geolib";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map(props) {
  const { searchResults } = props;

  /**
   * transform search results to 
    { latitude: 52.516272, longitude: 13.377722 },
    { latitude: 51.515, longitude: 7.453619 },
    { latitude: 51.503333, longitude: -0.119722 },
    ]); 
   */
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  // pop up location selected
  const [selectedLocation, setSelectedLocation] = useState({});
  const [showPopup, togglePopup] = React.useState(false);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/whiwf/ckz5kg36c000x15lc379amdz6"
      mapboxApiAccessToken={process.env.mapbox_keys}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, id) => (
        <div key={id}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl"
            >
              📍
            </p>
          </Marker>

          {/* show pop up */}
          {selectedLocation.long === result.long && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
            >{result.title}</Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
