//Global Variables
let slideNum = 0;
let specsNum = 0;
let btn = document.getElementsByClassName("imgChange");
let getImg = document.getElementsByClassName("carSlide");

// Changing images automatically
function slide() {
  for (let i = 0; i < getImg.length; i++) {
      getImg[i].style.display = "none";
  }
  slideNum++;
    if (slideNum > getImg.length) {
        slideNum = 1;
      }
    getImg[slideNum - 1].style.display = "block";
    imgInd(slideNum - 1);
}
setInterval(slide, 8000);
function slideDec() {
  for (let i = 0; i < getImg.length; i++) {
      getImg[i].style.display = "none";
  }
  slideNum--;
    if (slideNum > getImg.length) {
        slideNum = 1;
      }
    getImg[slideNum - 1].style.display = "block";
    imgInd(slideNum - 1);
}

// Changing Image by button
btn[1].addEventListener('click',() =>{
    slide();
  })
  btn[0].addEventListener('click',() =>{
      slideDec();
  })


// Circles Indication to Changing Images and Specifications changing
let imgInd = (i) => {
    let j = 0;
    let hp = document.getElementById("hp");
    let rim = document.getElementById("rim");
    let seat = document.getElementById("seat");
    let tr = document.getElementById("tr");
    
    for (; j < 6; j++) {
        if (j != i) {
            document.getElementById("c" + j).style.backgroundColor = "black";
        } else {
            document.getElementById("c" + i).style.backgroundColor ="rgb(197, 150, 150)";
            if (i==0) {
                let cns=document.getElementById("carNameSpecs");
                cns.innerHTML="Audi";
                hp.innerHTML="1000 HP";
                rim.innerHTML="Alloy";
                seat.innerHTML="Leather Black";
                tr.innerHTML="Yes";
            }
            else if (i==1) {
                let cns=document.getElementById("carNameSpecs");
                cns.innerHTML="Audi";
                hp.innerHTML="1200 HP";
                rim.innerHTML="Alloy";
                seat.innerHTML="Leather Brown";
                tr.innerHTML="Yes";
            }
            else if (i==2) {
                let cns=document.getElementById("carNameSpecs");
                cns.innerHTML="Sports Car";
                hp.innerHTML="1800 HP";
                rim.innerHTML="Alloy";
                seat.innerHTML="Leather Yellow";
                tr.innerHTML="No";
            }
            else if (i==3) {
                let cns=document.getElementById("carNameSpecs");
                cns.innerHTML="Chevorlet";
                hp.innerHTML="1200 HP";
                rim.innerHTML="Alloy";
                seat.innerHTML="No Covers";
                tr.innerHTML="No";
            }
            else if (i==4) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Mercedes";
            hp.innerHTML="1600 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Black";
            tr.innerHTML="Yes";
        }
        else {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Range Rover";
            hp.innerHTML="2000 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Red";
            tr.innerHTML="Yes";
        }
    }
}
};

//Display of Buttons to switch image
    document.getElementById("images").addEventListener("mouseover",()=>{
        for(let l=0;l<2;l++){
            btn[l].style.display="flex"
        }
    });
    document.getElementById("images").addEventListener("mouseout",()=>{
        for(let l=0;l<2;l++){
            btn[l].style.display="none"
        }
    });

//Clock and Calander for header
function Calander() {
    let timedate = new Date();
    let date = timedate.toDateString();
    let time = timedate.toTimeString().slice(0,8);
    document.getElementById("time").innerHTML=time;
    document.getElementById("date").innerHTML=date;
}
setInterval(Calander,1000);

//Body Car's List
let b=1;
let lcb=document.getElementsByClassName("listChange");
lcb[0].addEventListener('click',()=>{
    b-=3;
    if (b<1) {
        b=8
    }
    showToyota(b);
});
lcb[1].addEventListener('click',()=>{
    b+=3;
    if(b>8){
        b=1;
    }
    showToyota(b);
});

lcb[2].addEventListener('click',()=>{
    b=b-3;
    if (b<=1) {
        b=5
    }
    showHonda(b);
});
lcb[3].addEventListener('click',()=>{
    b+=3;
    if(b>5){
        b=1;
    }
    showHonda(b);
});

lcb[4].addEventListener('click',()=>{
    b=b-3;
    if (b<1) {
        b=4
    }
    showAudi(b);
});
lcb[5].addEventListener('click',()=>{
    b+=3;
    if(b>4){
        b=1;
    }
    showAudi(b);
});
lcb[6].addEventListener('click',()=>{
    b=b-3;
    if (b<1) {
        b=6
    }
    showBMV(b);
});
lcb[7].addEventListener('click',()=>{
    b+=3;
    if(b>6){
        b=1;
    }
    showBMV(b);
});

function showToyota(b){
    if (b>=1 && b<=3) { 
        document.getElementById("ti1").src="./images/corolla-cross.png";
        document.getElementById("tp1").innerHTML="2000Rs";
        document.getElementById("th1").innerHTML="Corolla Cross";
        document.getElementById("ti2").src="./images/camry.png";
        document.getElementById("tp2").innerHTML="4000Rs";
        document.getElementById("th2").innerHTML="Camry";
        document.getElementById("ti3").style.visibility='visible';
        document.getElementById("tp3").style.visibility='visible';
        document.getElementById("th3").style.visibility='visible';
        document.getElementById("ti3").src="./images/hiace.png";
        document.getElementById("tp3").innerHTML="8000Rs";
        document.getElementById("th3").innerHTML="Hiace";
    }
    else if (b>=4 && b<=6) { 
        document.getElementById("ti1").src="./images/corolla-x.png";
        document.getElementById("tp1").innerHTML="2000Rs";
        document.getElementById("th1").innerHTML="Corolla-X";
        document.getElementById("ti2").src="./images/prius.png";
        document.getElementById("tp2").innerHTML="4000Rs";
        document.getElementById("th2").innerHTML="Prius";
        document.getElementById("ti3").style.visibility='visible';
        document.getElementById("tp3").style.visibility='visible';
        document.getElementById("th3").style.visibility='visible';
        document.getElementById("ti3").src="./images/revo.png";
        document.getElementById("tp3").innerHTML="8000Rs";
        document.getElementById("th3").innerHTML="Revo";
    }
    else if(b>=7 && b<=8){
        document.getElementById("ti1").src="./images/yaris.png";
        document.getElementById("tp1").innerHTML="2000Rs";
        document.getElementById("th1").innerHTML="Yaris";
        document.getElementById("ti2").src="./images/prado.png";
        document.getElementById("tp2").innerHTML="4000Rs";
        document.getElementById("th2").innerHTML="Prado";
        document.getElementById("ti3").style.visibility='hidden';
        document.getElementById("tp3").style.visibility='hidden';
        document.getElementById("th3").style.visibility='hidden';
    }
}

function showHonda(h){
    if (h>=1 && h<=3) { 
        document.getElementById("hi1").src="./images/acoordf.png";
        document.getElementById("hp1").innerHTML="2000Rs";
        document.getElementById("hh1").innerHTML="Accord";
        document.getElementById("hi2").src="./images/cityg.jfif";
        document.getElementById("hp2").innerHTML="4000Rs";
        document.getElementById("hh2").innerHTML="City";
        document.getElementById("hi3").style.visibility='visible';
        document.getElementById("hp3").style.visibility='visible';
        document.getElementById("hh3").style.visibility='visible';
        document.getElementById("hi3").src="./images/civicf.jpg";
        document.getElementById("hp3").innerHTML="8000Rs";
        document.getElementById("hh3").innerHTML="Civic";
    }
    else if (h>=4 && h<=5) { 
        document.getElementById("hi1").src="./images/crvf.jfif";
        document.getElementById("hp1").innerHTML="2000Rs";
        document.getElementById("hh1").innerHTML="CRV";
        document.getElementById("hi2").src="./images/brvf.jpg";
        document.getElementById("hp2").innerHTML="4000Rs";
        document.getElementById("hh2").innerHTML="BRV";
        document.getElementById("hi3").style.visibility='hidden';
        document.getElementById("hp3").style.visibility='hidden';
        document.getElementById("hh3").style.visibility='hidden';
    }
}
function showAudi(h){
if (h>=1 && h<=3) { 
    document.getElementById("ai1").src="./images/a4.jfif";
        document.getElementById("ap1").innerHTML="2000Rs";
        document.getElementById("ah1").innerHTML="A4";
        document.getElementById("ai2").style.visibility='visible';
        document.getElementById("ap2").style.visibility='visible';
        document.getElementById("ah2").style.visibility='visible';
        document.getElementById("ai2").src="./images/rs3.jfif";
        document.getElementById("ap2").innerHTML="4000Rs";
        document.getElementById("ah2").innerHTML="RS 3";
        document.getElementById("ai3").style.visibility='visible';
        document.getElementById("ap3").style.visibility='visible';
        document.getElementById("ah3").style.visibility='visible';
        document.getElementById("ai3").src="./images/r8.jfif";
        document.getElementById("ap3").innerHTML="8000Rs";
        document.getElementById("ah3").innerHTML="R8";
    }
    else if (h==4) { 
        document.getElementById("ai1").src="./images/etrongt.jfif";
        document.getElementById("ap1").innerHTML="2000Rs";
        document.getElementById("ah1").innerHTML="Etron";
        document.getElementById("ah2").style.visibility='hidden';
        document.getElementById("ai2").style.visibility='hidden';
        document.getElementById("ap2").style.visibility='hidden';
        document.getElementById("ah3").style.visibility='hidden';
        document.getElementById("ai3").style.visibility='hidden';
        document.getElementById("ap3").style.visibility='hidden';
    }
}
function showBMV(h){
if (h>=1 && h<=3) { 
        document.getElementById("bi1").src="./images/420i.jfif";
        document.getElementById("bp1").innerHTML="2000Rs";
        document.getElementById("bh1").innerHTML="420i";
        document.getElementById("bi2").style.visibility='visible';
        document.getElementById("bp2").style.visibility='visible';
        document.getElementById("bh2").style.visibility='visible';
        document.getElementById("bi2").src="./images/5s.jfif";
        document.getElementById("bp2").innerHTML="4000Rs";
        document.getElementById("bh2").innerHTML="5 S";
        document.getElementById("bi3").style.visibility='visible';
        document.getElementById("bp3").style.visibility='visible';
        document.getElementById("bh3").style.visibility='visible';
        document.getElementById("bi3").src="./images/i3.jfif";
        document.getElementById("bp3").innerHTML="8000Rs";
        document.getElementById("bh3").innerHTML="I 3";
    }
    else if (h>=4 && h<=6) { 
        document.getElementById("bi1").src="./images/m3f.jfif";
        document.getElementById("bp1").innerHTML="2000Rs";
        document.getElementById("bh1").innerHTML="M3";
        document.getElementById("bi2").src="./images/i8.jfif";
        document.getElementById("bp2").innerHTML="2000Rs";
        document.getElementById("bh2").innerHTML="I 8";
        document.getElementById("bi3").src="./images/m4.jfif";
        document.getElementById("bp3").innerHTML="2000Rs";
        document.getElementById("bh3").innerHTML="M4";
    }
}