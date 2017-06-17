import axios from 'axios';
import config from './config';

// Get Location form

const locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', geocode);

function geocode (e) {
  e.preventDefault();
  var location = document.getElementById('location-input').value;
  axios
    .get(
      'https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: config.apiKey,
        }
      })
    .then((res) => {
      const formattedAddress = res.data.results[0].formatted_address;
      const formattedAddressOutput = `
      <ul class="list-group">
        <li class="list-group-item"> ${formattedAddress} </li>
      </ul>
      `;
      const addressComponents = res.data.results[0].address_components;
      let addressComponentsOutput = "<ul class='list-group'>";
      for(let i =0; i < addressComponents.length; i++) {
        addressComponentsOutput += `
          <li class="list-group-item">
            <strong>
              ${addressComponents[i].types[0]}
            </strong>: ${addressComponents[i].long_name}
          </li>
        `;
      }
      addressComponentsOutput += "</ul>";

      // Geometry
      const { lat, lng } = res.data.results[0].geometry.location;
      const geometryOutput = `
      <ul class="list-group">
        <li class="list-group-item"> 
          <strong>Latitude</strong>: ${lat}
        </li>
        <li class="list-group-item">
          <strong>Longitude</strong>: ${lng}
        </li>
      </ul>
      `;

      document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
      document.getElementById('address-components').innerHTML = addressComponentsOutput;
      document.getElementById('geometry').innerHTML = geometryOutput;
    })
    .catch((err)=> {
      console.log(err);
    });
}