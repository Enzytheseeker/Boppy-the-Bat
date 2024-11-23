const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const totalSupply = 420690000000000;

app.get('/api/total-supply', (req, res) => {
    res.send(totalSupply.toString());
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

