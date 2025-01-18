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
                    <p class="likes">${books[i].likes}<img id="heartImg" onclick= 'changeHeart(${i})' src = ${showHeart(i)}></p>
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

function showHeart(i) {;
    if (books[i].liked) {
        return "img/heart-full.png";
    } else {
        return "img/heart-empty.png";
    }
}

function changeHeart(i) {
    if (books[i].liked) {
        books[i].liked = false;
        books[i].likes = books[i].likes - 1;
        renderBooks();
    } else {
        books[i].liked = true;
        books[i].likes = books[i].likes + 1;
        renderBooks();
    }
}