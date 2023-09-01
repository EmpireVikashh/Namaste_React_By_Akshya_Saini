import { useState } from "react";

const UserLocation = ()=>{
    const [location, setLocation] = useState("Location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
      
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      }
      
      function error() {
        console.log("Unable to retrieve your location");
      }

    return(
        <p></p>
    )
}
export default UserLocation;