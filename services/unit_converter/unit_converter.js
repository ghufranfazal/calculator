document.addEventListener("DOMContentLoaded", () => {
    initializeConverters();
});

function initializeConverters() {
    setupLengthConverter();
    setupWeightConverter();
    setupTemperatureConverter();
    setupDensityConverter();
    setupSpeedConverter();
    setupAccelerationConverter();
}

/** Length Converter */
function setupLengthConverter() {
    const lengthUnits = ["Meter", "Kilometer", "Centimeter", "Millimeter", "Mile", "Yard", "Foot", "Inch"];
    populateUnits("length-from", lengthUnits);
    populateUnits("length-to", lengthUnits);

    document.querySelector("#length-input").addEventListener("input", convertLength);
    document.querySelector("#length-from").addEventListener("change", convertLength);
    document.querySelector("#length-to").addEventListener("change", convertLength);
}

function convertLength() {
    const value = parseFloat(document.querySelector("#length-input").value);
    const fromUnit = document.querySelector("#length-from").value;
    const toUnit = document.querySelector("#length-to").value;
    if (isNaN(value)) {
        updateOutput("#length-output", "Invalid Input");
        return;
    }

    const conversionRates = {
        Meter: 1,
        Kilometer: 0.001,
        Centimeter: 100,
        Millimeter: 1000,
        Mile: 0.000621371,
        Yard: 1.09361,
        Foot: 3.28084,
        Inch: 39.3701,
    };

    const result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    updateOutput("#length-output", result.toFixed(4));
}

/** Weight Converter */
function setupWeightConverter() {
    const weightUnits = ["Kilogram", "Gram", "Milligram", "Pound", "Ounce"];
    populateUnits("weight-from", weightUnits);
    populateUnits("weight-to", weightUnits);

    document.querySelector("#weight-input").addEventListener("input", convertWeight);
    document.querySelector("#weight-from").addEventListener("change", convertWeight);
    document.querySelector("#weight-to").addEventListener("change", convertWeight);
}

function convertWeight() {
    const value = parseFloat(document.querySelector("#weight-input").value);
    const fromUnit = document.querySelector("#weight-from").value;
    const toUnit = document.querySelector("#weight-to").value;
    if (isNaN(value)) {
        updateOutput("#weight-output", "Invalid Input");
        return;
    }

    const conversionRates = {
        Kilogram: 1,
        Gram: 1000,
        Milligram: 1e6,
        Pound: 2.20462,
        Ounce: 35.274,
    };

    const result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    updateOutput("#weight-output", result.toFixed(4));
}

/** Temperature Converter */
function setupTemperatureConverter() {
    const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];
    populateUnits("temperature-from", temperatureUnits);
    populateUnits("temperature-to", temperatureUnits);

    document.querySelector("#temperature-input").addEventListener("input", convertTemperature);
    document.querySelector("#temperature-from").addEventListener("change", convertTemperature);
    document.querySelector("#temperature-to").addEventListener("change", convertTemperature);
}

function convertTemperature() {
    const value = parseFloat(document.querySelector("#temperature-input").value);
    const fromUnit = document.querySelector("#temperature-from").value;
    const toUnit = document.querySelector("#temperature-to").value;
    if (isNaN(value)) {
        updateOutput("#temperature-output", "Invalid Input");
        return;
    }

    let result;
    if (fromUnit === toUnit) {
        result = value;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (value * 9) / 5 + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = value + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = ((value - 32) * 5) / 9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = ((value - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = value - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = ((value - 273.15) * 9) / 5 + 32;
    }

    updateOutput("#temperature-output", result.toFixed(4));
}

/** Density Converter */
function setupDensityConverter() {
    const densityUnits = ["kg/m³", "g/cm³", "lb/ft³"];
    populateUnits("density-from", densityUnits);
    populateUnits("density-to", densityUnits);

    document.querySelector("#density-input").addEventListener("input", convertDensity);
    document.querySelector("#density-from").addEventListener("change", convertDensity);
    document.querySelector("#density-to").addEventListener("change", convertDensity);
}

function convertDensity() {
    const value = parseFloat(document.querySelector("#density-input").value);
    const fromUnit = document.querySelector("#density-from").value;
    const toUnit = document.querySelector("#density-to").value;
    if (isNaN(value)) {
        updateOutput("#density-output", "Invalid Input");
        return;
    }

    const conversionRates = {
        "kg/m³": 1,
        "g/cm³": 0.001,
        "lb/ft³": 0.062428,
    };

    const result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    updateOutput("#density-output", result.toFixed(4));
}

/** Speed Converter */
function setupSpeedConverter() {
    const speedUnits = ["m/s", "km/h", "mph", "knot"];
    populateUnits("speed-from", speedUnits);
    populateUnits("speed-to", speedUnits);

    document.querySelector("#speed-input").addEventListener("input", convertSpeed);
    document.querySelector("#speed-from").addEventListener("change", convertSpeed);
    document.querySelector("#speed-to").addEventListener("change", convertSpeed);
}

function convertSpeed() {
    const value = parseFloat(document.querySelector("#speed-input").value);
    const fromUnit = document.querySelector("#speed-from").value;
    const toUnit = document.querySelector("#speed-to").value;
    if (isNaN(value)) {
        updateOutput("#speed-output", "Invalid Input");
        return;
    }

    const conversionRates = {
        "m/s": 1,
        "km/h": 3.6,
        "mph": 2.23694,
        "knot": 1.94384,
    };

    const result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    updateOutput("#speed-output", result.toFixed(4));
}

/** Acceleration Converter */
function setupAccelerationConverter() {
    const accelerationUnits = ["m/s²", "ft/s²", "g-force"];
    populateUnits("acceleration-from", accelerationUnits);
    populateUnits("acceleration-to", accelerationUnits);

    document.querySelector("#acceleration-input").addEventListener("input", convertAcceleration);
    document.querySelector("#acceleration-from").addEventListener("change", convertAcceleration);
    document.querySelector("#acceleration-to").addEventListener("change", convertAcceleration);
}

function convertAcceleration() {
    const value = parseFloat(document.querySelector("#acceleration-input").value);
    const fromUnit = document.querySelector("#acceleration-from").value;
    const toUnit = document.querySelector("#acceleration-to").value;
    if (isNaN(value)) {
        updateOutput("#acceleration-output", "Invalid Input");
        return;
    }

    const conversionRates = {
        "m/s²": 1,
        "ft/s²": 3.28084,
        "g-force": 0.101972,
    };

    const result = (value / conversionRates[fromUnit]) * conversionRates[toUnit];
    updateOutput("#acceleration-output", result.toFixed(4));
}

/** Utility Functions */
function populateUnits(selectId, units) {
    const select = document.querySelector(`#${selectId}`);
    units.forEach(unit => {
        const option = document.createElement("option");
        option.value = unit;
        option.textContent = unit;
        select.appendChild(option);
    });
}

function updateOutput(outputId, text) {
    document.querySelector(outputId).textContent = `Output: ${text}`;
}
