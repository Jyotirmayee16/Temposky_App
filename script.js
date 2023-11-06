const celsiusInput = document.getElementById("celsius-input");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
    } else {
        result.textContent = "Please enter a valid number.";
    }
});
