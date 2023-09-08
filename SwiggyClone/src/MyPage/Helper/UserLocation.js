import { useState } from "react";

const UserLocation = () => {
  const [location, setLocation] = useState("..location");

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
    const request = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?lat=${lat}&long=${long}`);
    const jsonResponse = await request.json();
    // const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=c509da363d15442089a73113230409&q=${lat},${long}&aqi=yes`);
    // const jsonResponse = await request.json();
    // const request = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=488fc3338ef249eca83d8ad64c05575b`);
    // const jsonResponse = await request.json();
    // https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=488fc3338ef249eca83d8ad64c05575b
    
    setLocation(
      jsonResponse.city,
      jsonResponse.principalSubdivision
    )
    console.log(jsonResponse);
  }
  return location;
}
export default UserLocation;