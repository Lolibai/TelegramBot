var request = require('request');
var { bot, telegramAPI } = require('../config');
var fs = require('fs');

exports.default = (req, res) => {
  res.send('Hello there Lolibai!');
};

exports.sendMessage = (req, res) => {
  try {
    request.post(
      `${telegramAPI}/${bot}/sendMessage?chat_id=${req.body.chat_id}&text=${
        req.body.text
      }`,
      {},
      (err, response) => {
        if (err) {
          res.json({ message: 'request failed', err: err });
          return;
        }
        res.json(response);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.sendFile = (req, res) => {
  try {
    var formData = {
      chat_id: req.body.chat_id,
      document: fs.createReadStream(req.body.documentPath)
    };
    request.post(
      { url: `${telegramAPI}/${bot}/sendDocument`, formData: formData },
      (err, response) => {
        if (err) {
          res.json({ message: 'failed', err: err });
          return;
        }
        res.json(response);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
