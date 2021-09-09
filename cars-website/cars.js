let slideNum = 0;
function slide() {
    var getImg = document.getElementsByClassName("carSlide");
    for(let i=0;i<getImg.length;i++){
        getImg[i].style.display = "none";
    }
    slideNum++;
    if(slideNum>getImg.length){
        slideNum=1;
    }
    getImg[slideNum-1].style.display="block";
}

setInterval(slide,2000);
