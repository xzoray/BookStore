function init() {
    renderBooks();
}

function renderBooks() {
    let bookData = document.getElementById('content');
    bookData.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        bookData.innerHTML += bookTemplate(i);
    }
}

function bookTemplate(i) {
    return `<div class="booksContent" id="bookContent">
                <h2>${books[i].name}</h2>
                <img class="bookImg" src="img/harry-potter-6261488_1280.jpg" alt="">
                <div class="priceAndLike">
                    <h3 class="price">${books[i].price}€</h3>
                    <p class="likes">${books[i].likes}<img class="heartImg" src="img/heart-empty.png" alt=""></p>
                </div>
                <div class="bookData">
                    <div class="dataValue">
                        <p><b>Author:</b></p>
                        <p><b>Published:</b></p>
                        <p><b>Genre:</b></p>
                    </div>
                    <div class="bookKeys">
                        <p>J.K. Rowling</p>
                        <p>${books[i].publishedYear}</p>
                        <p>Fantasy</p>
                    </div>
                </div>
                <div class="commentSection">
                    <h4>Comments:</h4>
                    <div class="overflowWindow">
                        <div class="username"><span>username:</span></div>
                        <div class="comments"><span>Hello World!</span></div>
                    </div>
                    <div class="inputSection">
                        <input type="text" placeholder="leave a comment...">
                        <img class="sendButton" src="img/hexagon-2307352_1280.png" alt="">
                    </div>
                </div>
            </div>`
}