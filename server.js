const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts')

app.use(express.json());

/* listening */
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

/* homepage route */
app.get('/', (req, res) => {
    res.send(`Welcome on our server`)
})

/* posts route */
app.use('/api/v1/posts', postsRouter)