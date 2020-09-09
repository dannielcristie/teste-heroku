const express = require('express');
const app = express();

app.get('/',(req, res) => res.send('hello Danniel'));

app.listen(process.env.PORT || 3000);