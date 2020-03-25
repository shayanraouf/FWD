const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({ item: 'pastry'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Express server listening on port 5000");
});

// localhost:5000