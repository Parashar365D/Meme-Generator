const meme_btn = document.querySelector(".memegenerator .memegenerator-btn");
const memeImg = document.querySelector(".memegenerator img");
const memeTitle = document.querySelector(".memegenerator .memetitle");
const memeAuthor = document.querySelector(".memegenerator .meme-author");


const updatedetail = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `create by ${author}`;
}

const creatememe = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then(data => {updatedetail(data.url, data.title, data.author)});
    };
meme_btn.addEventListener("click",creatememe);

creatememe();

