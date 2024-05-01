import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res)=> {
     res.send("Hello form server");
});

app.listen(port, ()=> {
     console.log(`server is connected ${port}`);
})

// password - 3947IlptRSVq6xee