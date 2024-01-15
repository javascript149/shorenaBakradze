function convertOuncesToMilliliters() {
    const ouncesInput = document.getElementById("ounces");
    const resultElement = document.getElementById("result");

    const ounces = parseFloat(ouncesInput.value);
    if (!isNaN(ounces)) {
      const milliliters = ounces * 29.5735;
      resultElement.textContent = `${ounces} ounces is approximately ${milliliters.toFixed(2)} milliliters.`;
    } else {
      resultElement.textContent = "Please enter a valid number of ounces.";
    }
  }