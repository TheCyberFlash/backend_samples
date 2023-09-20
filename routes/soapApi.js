const express = require('express');
const soap = require('soap');
const router = express.Router();

const url = 'https://www.w3schools.com/xml/tempconvert.asmx?wsdl';

router.post('/convert', (req, res) => {
  console.log("at /convert");
  const { temperature, conversionType } = req.body;

  const args = {
    Temperature: temperature
  };

  soap.createClient(url, (err, client) => {
    if (err) {
      console.error(err);
      const errorMessage = err.message || 'Error occurred.';
      return res.status(500).json({ error: errorMessage });
    }

    const method = conversionType === 'CelsiusToFahrenheit'
      ? 'CelsiusToFahrenheit'
      : 'FahrenheitToCelsius';

    client[method](args, (err, result) => {
      if (err) {
        console.error(err);
        const errorMessage = err.message || 'Error occurred.';
        return res.status(500).json({ error: errorMessage });
      }

      const responseKey = method === 'CelsiusToFahrenheit'
        ? 'CelsiusToFahrenheitResult'
        : 'FahrenheitToCelsiusResult';

      res.status(200).json({ result: result[responseKey] });
    });
  });
});

module.exports = router;
