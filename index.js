const express = require('express');

const app = express();

app.get('/todo', function (req, res) {
    res.json([{id: "123", title: "my title", description: "my description"}]);
});

app.listen(3000);
