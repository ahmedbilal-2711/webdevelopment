// Changing images automatically
let slideNum = 0;
function slide() {
  var getImg = document.getElementsByClassName("carSlide");
  for (let i = 0; i < getImg.length; i++) {
    getImg[i].style.display = "none";
  }
  slideNum++;
  if (slideNum > getImg.length) {
    slideNum = 1;
  }
  getImg[slideNum - 1].style.display = "block";
  imgInd(slideNum - 1);

  if (slideNum=0) {
    document.getElementById("carNameSpecs").innerHTML = "Audi";
    console.log("Audi");
}
else{
    document.getElementById("carNameSpecs").innerHTML = "xyz";
    console.log("xyz");
}
  
}
setInterval(slide, 4000);

let buy = document.getElementById("BuyNow");

// Circles Indication to Changing Images
let imgInd = (i) => {
  let j = 0;
  for (; j < 6; j++) {
    if (j != i) {
        document.getElementById("c" + j).style.backgroundColor = "black";
    } else {
        document.getElementById("c" + i).style.backgroundColor ="rgb(197, 150, 150)";
    }
  }
};

//Display Specs
function specs(s) {
    if (s=0) {
        document.getElementById("carNameSpecs").innerHTML = "Audi";
        console.log("Audi");
        console.log(s);
    }
    else if(s=1){
        document.getElementById("carNameSpecs").innerHTML = "xyz";
        console.log("Audi");
        console.log(s);
    }
    else if(s=2){
        document.getElementById("carNameSpecs").innerHTML = "Sports Car";
        console.log("Sports Car");
        console.log(s);
    }
    else if(s=3){
        document.getElementById("carNameSpecs").innerHTML = "Chavorlet";
        console.log("Chavorlet");
        console.log(s);
    }
    else if(s=4){
        document.getElementById("carNameSpecs").innerHTML = "Mercedes";
        console.log("Mercedes");
        console.log(s);
    }
    else{
        document.getElementById("carNameSpecs").innerHTML = "Range Rover";
        console.log("Range Rover");
        console.log(s);
    }
}
