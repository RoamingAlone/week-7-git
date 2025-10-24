document.getElementById("countrySelect").addEventListener("change", async function () {
  const country = this.value;
  if (country === "--select--") return;

  clearTable();
  showSpinner(true);

  try {
    // 1️⃣ Fetch country info
    const res = await fetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`);
    const data = await res.json();
    const info = data[0];

    const name = info.name.common;
    const officialName = info.name.official;
    const capital = info.capital[0];
    const language = Object.values(info.languages)[0];
    const population = info.population.toLocaleString();
    const flag = info.flags.png;
    const mapLink = info.maps.googleMaps;
    const [lat, lon] = info.capitalInfo.latlng;

    // 2️⃣ Fetch weather info
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain&forecast_days=1`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    const temps = weatherData.hourly.temperature_2m;
    const rains = weatherData.hourly.rain;

    const avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
    const totalRain = rains.reduce((a, b) => a + b, 0).toFixed(1);

    // 3️⃣ Update table
    document.getElementById("name").textContent = name;
    document.getElementById("officialName").textContent = officialName;
    document.getElementById("capital").textContent = capital;
    document.getElementById("language").textContent = language;
    document.getElementById("map").innerHTML = `<a href="${mapLink}" target="_blank">View Map</a>`;
    document.getElementById("population").textContent = population;
    document.getElementById("flag").innerHTML = `<img src="${flag}" class="flag" alt="Flag">`;
    document.getElementById("latlong").textContent = `${lat}, ${lon}`;
    document.getElementById("rain").textContent = `${totalRain} mm`;
    document.getElementById("temp").textContent = `${avgTemp} °C`;
  } catch (err) {
    alert("Error fetching data. Please try again.");
    console.error(err);
  } finally {
    showSpinner(false);
  }
});

function showSpinner(show) {
  document.getElementById("spinner").style.display = show ? "block" : "none";
}

function clearTable() {
  document.querySelectorAll("#infoTable td:nth-child(2)").forEach(td => td.textContent = "");
}
