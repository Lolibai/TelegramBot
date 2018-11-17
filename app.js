var express = require('express');
var cors = require('cors');
var app = express();
var expressSwagger = require('express-swagger-generator')(app);
var swaggerUi = require('express-swaggerize-ui');
var bodyParser = require('body-parser');
var port = 22180;

var botRoutes = require('./routes/bot.routes');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

app.use('/api', botRoutes);

let options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0'
    },
    host: `localhost:${port}`,
    basePath: '',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https']
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/*.js'] //Path to the API handle folder
};
expressSwagger(options);

app.get('/', (req, res) => {
  res.send('TelegramBOT');
})

app.use('/api-docs.json', function(req, res) {
  res.json(require('./path/to/swaggerize/docs.json'));
});
app.use('/api-docs', swaggerUi());

app.listen(port, function() {
  console.log(`Server is listenings ${port} port`);
});
