let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "golang") {
            event.target.setAttribute("src", "assets/image/Dasar Pemrograman Golang new.jpg");
            return;
        } else if (event.target.id === "nodejs") {
            event.target.setAttribute("src", "assets/image/Pengenalan Node.js Melalui Aplikasi Web new.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "golang") {
            event.target.setAttribute("src", "assets/image/Dasar Pemrograman Golang.png");
            return;
        }
        if (event.target.id === "nodejs") {
            event.target.setAttribute("src", "assets/image/Pengenalan Node.js Melalui Aplikasi Web.png");
            return;
        }
    });
}