import { useEffect, useState } from 'react';
import React from 'react';
import css from "./style.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const { longitude, latitude } = props.ISSPositionObj;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBLmxDjXROy0njhnfNRlnA7bt0o1XZExzE",
  })

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={5} center={{ lat: +latitude, lng: +longitude }} mapContainerClassName={css["map"]} className={css["map"]}>
      <Marker key={latitude} position={{ lat: +latitude, lng: +longitude }} />
    </GoogleMap>
  )
}

export default Map;