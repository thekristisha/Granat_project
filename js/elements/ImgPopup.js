class ImgPopup{
    constructor(popupImgElement){ 
        this.popupImgElement = popupImgElement;
        this.closeBtn = this.popupImgElement.querySelector('.popup-image__close');
        this.imgElement = this.popupImgElement.querySelector('.popup-image__img');
    };

    open = (card) => {
        this.popupImgElement.classList.add('popup-image_is-opened');
        this.closeBtn.addEventListener('click', this.close);
        this.imgElement.src = `${card.src}`; 
    };

    show = (link) => {
        this.popupImgElement.classList.add('popup-image_is-opened');
        this.closeBtn.addEventListener('click', this.close);
        this.imgElement.src = `${link}`; 
    };

    close = () => {
        this.closeBtn.removeEventListener('click', this.close);
        this.imgElement.src = '';
        this.popupImgElement.classList.remove('popup-image_is-opened');
    };

}