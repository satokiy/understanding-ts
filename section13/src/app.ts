import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const key = process.env.GOOGLE_API_KEY;

document.addEventListener("DOMContentLoaded", function () {
  let script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
  document.head.appendChild(script);
});

type GoogleGeocodingResponse = {
  results: { geometry: { location: google.maps.LatLng } }[]
  status: "OK" | "ZERO_RESULTS";
};


function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  // google api の実行
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${key}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("座標を取得できませんでした。");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 16
      })
      new google.maps.Marker({position: coordinates, map: map})
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
