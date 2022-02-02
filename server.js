const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

require('./server/config/config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./server/routes/interval.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
