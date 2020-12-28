class Card {
    /* 
        Отлично, что для создания разметки используется template и он вынесен в приватное статическое поле но, 
        чтобы класс Card был ещё универсальней, можно передавать селектор темплейта как параметр конструктора класса
    */
    static _template = document.querySelector('#card-template').content;

    constructor(cardData, imgWindow){
        this.cardData = cardData;
        this.imgWindow = imgWindow;
    }

    create = () => {
        this.cardElement = Card._template.cloneNode(true).children[0];
        this.cardElement.querySelector('.photo-card__image').style.backgroundImage = `url(${this.cardData.link})`;  
        this.setEventListeners(this.cardElement);  
        return this.cardElement;
    }

    setEventListeners = (cardItem) =>{
        cardItem.querySelector('.photo-card__like-icon').addEventListener('click', this.like);
        cardItem.querySelector('.photo-card__image').addEventListener('click', this.showImg);        
    }

    like = (evt) => {
        evt.target.classList.toggle('photo-card__like-icon_liked');
    }


    showImg = (evt) => {
        if (evt.target.classList.contains('photo-card__image')) {
            this.imgWindow.show(this.cardData.link);
        }
    }
}