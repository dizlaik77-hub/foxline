const list = document.getElementById("animeList");

fetch("/anime")
.then(res => res.json())
.then(data => {
    data.forEach(a => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = 
            <><h3>${a.title}</h3><button onclick="watch(this)">Смотреть</button></>
        ;

        list.appendChild(div);
    });
});

function watch(btn) {
    btn.parentElement.classList.add("watched");
}