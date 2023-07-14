function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput");
    var unitSelect = document.getElementById("unitSelect");
    var result = document.getElementById("result");

    // Check if temperature is valid
    if (temperatureInput.value === "" || isNaN(temperatureInput.value)) {
        result.innerHTML = "Please enter a valid temperature.";
        result.style.color = "red";
        return;
    }

    var temperature = parseFloat(temperatureInput.value);

    // Convert temperature based on selected unit
    var convertedTemperature;
    if (unitSelect.value === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        result.innerHTML = temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F";
    } else if (unitSelect.value === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        result.innerHTML = temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C";
    }
    result.style.color = "black";
}
