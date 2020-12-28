const photoCards = [
    {
        link: '../images/gallery/food1.jpg'
    },
    {
        link: '../images/gallery/food2.jpg'
    },
    {
        link: '../images/gallery/juwel1.jpg'
    },
    {
        link: '../images/gallery/juwel2.jpg'
    },
    {
        link: '../images/gallery/pizza1.jpg'
    },
    {
        link: '../images/gallery/pizza2.jpg'
    },
    {
        link: '../images/gallery/pizza3.jpg'
    },
    {
        link: '../images/gallery/sport1.jpg'
    },
    {
        link: '../images/gallery/sport2.jpg'
    },
    {
        link: '../images/gallery/undies1.jpg'
    },
    {
        link: '../images/gallery/undies2.jpg'
    },
    {
        link: '../images/gallery/undies3.jpg'
    },
]

const cardsContainer = document.querySelector('.photo__grid');
const popupImg = document.querySelector('.popup-image');

const imgWindow = new ImgPopup(popupImg);
const createCard = (...args) => new Card(...args, imgWindow);
const cardList = new CardList(photoCards, cardsContainer, createCard);

cardList.render();