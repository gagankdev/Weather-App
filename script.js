const apiKey = "d4ee329faf734d8981684455260102";

function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherCard").style.display = "block";

            document.getElementById("city").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("temp").innerText =
                `${data.current.temp_c} °C`;

            document.getElementById("condition").innerText =
                data.current.condition.text;

            document.getElementById("icon").src =
                "https:" + data.current.condition.icon;

            document.getElementById("humidity").innerText =
                data.current.humidity + "%";

            document.getElementById("wind").innerText =
                data.current.wind_kph + " km/h";

            document.getElementById("feelsLike").innerText =
                data.current.feelslike_c + " °C";

            document.getElementById("aqi").innerText =
                data.current.air_quality.pm2_5.toFixed(1);
        })
        .catch(error => {
            alert("Location not found!");
            console.error(error);
        });
}