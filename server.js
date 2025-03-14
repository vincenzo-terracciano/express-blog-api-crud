const express = require('express');
const app = express();
const port = 3000;

/* listening */
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

/* homepage route */
app.get('/', (req, res) => {
    res.send(`Welcome on our server`)
})

