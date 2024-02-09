import express from 'express';
import { createServer } from 'vite';

const app = express();
const port = 3000;

async function createViteServer() {
    const vite = await createServer({
        server: { middlewareMode: 'html' }
    });
    app.use(vite.middlewares);
}

createViteServer().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});

app.get('/api/products', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/api/shop', (req, res)=>{
   
})
