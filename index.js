import express from 'express';

const app = express();

const PORT = 8000;

app.get("/", (req, res)=> {
     res.send("Hello from server.");
})

app.listen(PORT, ()=> {
     console.log(`Server is listing on PORT: ${PORT}`);
})