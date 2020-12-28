const feedbackCards = document.querySelectorAll('.responses__feedback');
const popupImgElement = document.querySelector('.popup-image');
const imgWindow = new ImgPopup(popupImgElement);


function setEvtListener(elem){
    elem.forEach((item)=>{
        item.addEventListener('click', function(evt){
            imgWindow.open(evt.currentTarget);
        });
    });
}
setEvtListener(feedbackCards);

