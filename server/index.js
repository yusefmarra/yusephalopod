const express = require('express');
const path = require('path');

const app = express();

require('./routes/nameRoutes')(app);

app.use(express.static('../client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
