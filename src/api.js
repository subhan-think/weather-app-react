const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bbcb12db64msh23fe272fb06b0f1p1cc72ajsn78f626285bdb",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", geoApiOptions)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "ab1204e0958cc66b2fea74fa220d4b5c";

export { geoApiOptions, GEO_API_URL, WEATHER_API_KEY, WEATHER_API_URL };
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
