const mongoose = require('mongoose');

const db_name = "intervalsdb"

const connectionString = `mongodb+srv://root:root@authorsdb.uqqfq.mongodb.net/${db_name}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
