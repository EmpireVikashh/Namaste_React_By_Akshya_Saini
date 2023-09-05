// import { useState } from "react";

const UserLocation = () => {
  // const [location, setLocation] = useState("Location");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }


  async function success(position) {
    // console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    await fetchAddress(latitude,longitude);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  async function fetchAddress(lat, long) {
    // const request = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?lat=${lat}&long=${long}`);
    // const jsonResponse = await request.json();
    // const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=c509da363d15442089a73113230409&q=${lat},${long}&aqi=yes`);
    // const jsonResponse = await request.json();
    
    // console.log(jsonResponse);
  }

  return (
    <p></p>
  )
}
export default UserLocation;