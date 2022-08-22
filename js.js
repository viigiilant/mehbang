window.addEventListener("scroll" , function(){
    const scroll = this.scrollY
    if(scroll > 100){
        document.querySelector(".form2").style.display = "block";
    }
    else{
        document.querySelector(".form2").style.display = "none";
    }
}     
  
)


var a = 1;
const showhide = document.querySelector(".show1");
showhide.addEventListener("click" , function(){
    if(a == 1){
        show();
        return a = 0;
    }
    else {
        hide();
        return a = 1;
    }
})

function show() {
    document.querySelector(".hide1").style.display = "block"
    document.querySelector(".show1").style.color = "#58BA47"
    document.querySelector(".showicon2").src = "Icon/up.svg"
    document.querySelector(".guid1").style.margin = "0 16px 0px 16px"
}
function hide() {
    document.querySelector(".hide1").style.display = "none"
    document.querySelector(".show1").style.color = "#343434"
    document.querySelector(".showicon2").src = "Icon/down.svg"
    document.querySelector(".guid1").style.margin = "0 16px 11px 16px"
}

var b = 1;
const showhide2 = document.querySelector(".show2");
showhide2.addEventListener("click" , function(){
    if(b == 1){
        show2();
        return b = 0;
    }
    else {
        hide2();
        return b = 1;
    }
})

function show2() {
    document.querySelector(".hide2").style.display = "block"
    document.querySelector(".show2").style.color = "#58BA47"
    document.querySelector(".showicon4").src = "Icon/up.svg"
    document.querySelector(".guid2").style.margin = "0 16px 0px 16px"
}
function hide2() {
    document.querySelector(".hide2").style.display = "none"
    document.querySelector(".show2").style.color = "#343434"
    document.querySelector(".showicon4").src = "Icon/down.svg"
    document.querySelector(".guid2").style.margin = "0 16px 11px 16px"
}


var c = 1;
const showhide3 = document.querySelector(".show3");
showhide3.addEventListener("click" , function(){
    if(c == 1){
        show3();
        return c = 0;
    }
    else {
        hide3();
        return c = 1;
    }
})

function show3() {
    document.querySelector(".hide3").style.display = "block"
    document.querySelector(".show3").style.color = "#58BA47"
    document.querySelector(".showicon6").src = "Icon/up.svg"
    document.querySelector(".guid3").style.margin = "0 16px 0px 16px"
}
function hide3() {
    document.querySelector(".hide3").style.display = "none"
    document.querySelector(".show3").style.color = "#343434"
    document.querySelector(".showicon6").src = "Icon/down.svg"
    document.querySelector(".guid3").style.margin = "0 16px 11px 16px"
}
