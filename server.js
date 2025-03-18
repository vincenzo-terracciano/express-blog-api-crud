const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts')

const serverError = require('./middlewares/serverError')

app.use(express.json());

/* listening */
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

/* homepage route */
app.get('/', (req, res) => {
    res.send(`Welcome on our server`)
})

/* posts endpoint */
app.use('/api/v1/posts', postsRouter)

app.use(serverError)