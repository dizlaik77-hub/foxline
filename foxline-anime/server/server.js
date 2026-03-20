const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("../client"));

let db = { users: [], anime: [] };

// регистрация
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    db.users.push({ username, password, role: "user" });
    res.send("OK");
});

// вход
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // разработчик
    if (password === "Razrab6996") {
        return res.send({ role: "dev" });
    }

    const user = db.users.find(u => u.username === username && u.password === password);

    if (user) res.send(user);
    else res.status(401).send("Ошибка");
});

// добавить аниме (только разработчик)
app.post("/add-anime", (req, res) => {
    db.anime.push(req.body);
    res.send("Добавлено");
});

app.get("/anime", (req, res) => {
    res.send(db.anime);
});

app.listen(3000, () => console.log("Server started"));