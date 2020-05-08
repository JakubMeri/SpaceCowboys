// #43484e; farba navbaru


let card1 = document.querySelectorAll(".card1");
let card2 = document.querySelectorAll(".card2");
let card3 = document.querySelectorAll(".card3");
let card4 = document.querySelectorAll(".card4");
let card5 = document.querySelectorAll(".card5");
let flip1 = document.querySelectorAll(".flip1");
let flip2 = document.querySelectorAll(".flip2");
let flip3 = document.querySelectorAll(".flip3");
let flip4 = document.querySelectorAll(".flip4");
let flip5 = document.querySelectorAll(".flip5");

let show1 = true;
let show2 = true;
let show3 = true;
let show4 = true;
let show5 = true;

flip1.forEach( a => {
  a.addEventListener("click", () => {
    if(show1 == true)
    card1.forEach(b => {
      b.classList.add("card-rotate");
    });
    else{
    card1.forEach(b => {
      b.classList.remove("card-rotate");
    });
    }
    show1 = !show1;
});
});


flip2.forEach( a => {
  a.addEventListener("click", () => {
    if(show2 == true)
    card2.forEach(b => {
      b.classList.add("card-rotate");
    });
    else{
    card2.forEach(b => {
      b.classList.remove("card-rotate");
    });
    }
    show2 = !show2;
});
});

flip3.forEach( a => {
  a.addEventListener("click", () => {
    if(show3 == true)
    card3.forEach(b => {
      b.classList.add("card-rotate");
    });
    else{
    card3.forEach(b => {
      b.classList.remove("card-rotate");
    });
    }
    show3 = !show3;
});
});

flip4.forEach( a => {
  a.addEventListener("click", () => {
    if(show4 == true)
    card4.forEach(b => {
      b.classList.add("card-rotate");
    });
    else{
    card4.forEach(b => {
      b.classList.remove("card-rotate");
    });
    }
    show4 = !show4;
});
});

flip5.forEach( a => {
  a.addEventListener("click", () => {
    if(show5 == true)
    card5.forEach(b => {
      b.classList.add("card-rotate");
    });
    else{
    card5.forEach(b => {
      b.classList.remove("card-rotate");
    });
    }
    show5 = !show5;
});
});


//lightbox
const overlayGalery = document.querySelector(".overlay");
const lightbox = document.querySelector(".lightbox");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const close = document.querySelector(".close");
const galery = document.querySelector(".galery");
const descImage = document.querySelector(".popis");
const form = document.getElementById("form");

galery.addEventListener("click", (e)=>{
let desc = ["","This is amazing!", "Awesome!", "Super!", "Perfect!","Look!", "Fabulous!", "This is amazing!", "Awesome!", "Super!", "Perfect!","Look!", "Fabulous!"]
e.preventDefault();
overlayGalery.style.display = "flex";
let image =  e.target.getAttribute("alt");

lightbox.style.background = `url('./galeryIMG/${image}.jpeg') center`;
lightbox.style.backgroundSize = "cover";
descImage.innerHTML = desc[image];
right.addEventListener("click", () => {
  if(image == 12){
    image = 12;
  }
  else{
    image++;
  }
lightbox.style.background = `url('./galeryIMG/${image}.jpeg') center`;
lightbox.style.backgroundSize = "cover";
descImage.innerHTML = desc[image];
});
left.addEventListener("click", () => {
  if(image == 1){
    image = 1;
  }
  else{
    image--;
  }
  lightbox.style.background = `url('./galeryIMG/${image}.jpeg') center`;
  lightbox.style.backgroundSize = "cover";
  descImage.innerHTML = desc[image];
  }
  );
}
);


//close Lightbox
close.addEventListener("click", () => {
overlayGalery.style.display = "none";
});

//validacia
const messageError = document.querySelector(".messageError");
const input = document.querySelectorAll(".input");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ok = document.querySelectorAll(".fa-check-circle");
const wrong = document.querySelectorAll(".fa-times-circle");

form.addEventListener("submit", (e) => {
e.preventDefault();
if(input[0].value == "" && input[1].value == "" && input[2].value ==""){
  input.forEach(a => {
    a.style.border = "solid 1px red";
  });
  wrong.forEach(b => {
    b.style.opacity = "1";
  });
  messageError.innerHTML = "Empty fields!";
}
else if(input[0].value == ""){
  input[0].style.border = "solid 1px red";
  wrong[0].style.opacity = "1";
  messageError.innerHTML = "Empty name!";
}
else if(input[1].value == ""){
  input[1].style.border = "solid 1px red";
  wrong[1].style.opacity = "1";
  messageError.innerHTML = "Empty lastname!";
}
else if(input[2].value == ""){
  input[2].style.border = "solid 1px red";
  wrong[2].style.opacity = "1";
  messageError.innerHTML = "Empty email!";
}
else{
    
    form.reset();
    messageError.innerHTML = "";
    ok.forEach(a => {
      a.style.opacity = "0";
    });
    input.forEach(b => {
      b.style.border = "solid 1px grey";
    });
}
});

//keyup validation 
input[0].addEventListener("keyup", () =>{
if(input[0].value.length >= 4){
  input[0].style.border = "solid 1px lightgreen";
  wrong[0].style.opacity = "0";
  ok[0].style.opacity = "1";
}
else{
  input[0].style.border = "solid 1px red";
  ok[0].style.opacity = "0";
  wrong[0].style.opacity ="1";
}
});
input[1].addEventListener("keyup", () =>{
  if(input[1].value.length >= 4){
    input[1].style.border = "solid 1px lightgreen";
    wrong[1].style.opacity = "0";
    ok[1].style.opacity = "1";
  }
  else{
    input[1].style.border = "solid 1px red";
    ok[1].style.opacity = "0";
    wrong[1].style.opacity ="1";
  }
  });
  input[2].addEventListener("keyup", () =>{
     const test = regex.test(input[2].value.toLowerCase());
     if(test == true){
      input[2].style.border = "solid 1px lightgreen";
      wrong[2].style.opacity = "0";
      ok[2].style.opacity = "1";
      messageError.innerHTML = "";
     }
     else{
      input[2].style.border = "solid 1px red";
      ok[2].style.opacity = "0";
      wrong[2].style.opacity ="1";
     }
    });
  
//ScrollSpy and nav color
(function() {

  let section = document.querySelectorAll(".section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    let nav = document.querySelector(".navbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop < 10) {
      nav.classList.remove("navColor");
      nav.classList.add("navTransp");
    } else {
  
      nav.classList.add("navColor");
      nav.classList.remove("navTransp");
    }

    for (i in sections) {
      if (sections[i] - 200 <= scrollPosition) {
        document.querySelector('.active').classList.remove("active");
        document.querySelector('a[href*=' + i + ']').classList.add("active");
      }
    }
  };
})();
//Mobile menu
const showMenu = document.querySelector(".menu-show");
const hideMenu = document.querySelector(".menu-hide");
const mobileMenu = document.querySelector(".mobile-menu");
const link = document.querySelectorAll(".mobile-item");
let toggle = true;

showMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  showMenu.style.display = "none";
  hideMenu.style.display = "block";
  setTimeout(() => {
  mobileMenu.style.opacity = "1";
  }, 400);
});

hideMenu.addEventListener("click", () => {
  mobileMenu.style.opacity = "0"; 
  showMenu.style.display = "block";
  hideMenu.style.display = "none";
  setTimeout(() => {
  mobileMenu.style.display = "none";
  }, 400);
});

link.forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    hideMenu.style.display = "none";
    showMenu.style.display = "block";
  });
});
//slider
  const slide1 = document.querySelector(".one");
  const slide2 = document.querySelector(".two");
  const slide3 = document.querySelector(".three");
  const slide4 = document.querySelector(".four");
  const slide5 = document.querySelector(".five");

  const slideRight = document.querySelector(".slideRight");
  const slideLeft = document.querySelector(".slideLeft");

  let poradie = 1;

  slideRight.addEventListener("click", () => {
    if(poradie == 5){
      poradie = 5;
    }
    else{
    poradie++;
  }
  if(poradie == 1){
    slide1.style.right = "0%";
    slide2.style.right = "-100%";
    slide3.style.right = "-100%";
    slide4.style.right = "-100%";
    slide5.style.right = "-100%";
    img1.checked = true;
  }
  if(poradie == 2){
    slide1.style.right = "100%";
    slide2.style.right = "0%";
    slide3.style.right = "-100%";
    slide4.style.right = "-100%";
    slide5.style.right = "-100%";
    img2.checked = true;
  }
  if(poradie == 3){
    slide1.style.right = "100%";
    slide2.style.right = "100%";
    slide3.style.right = "0%";
    slide4.style.right = "-100%";
    slide5.style.right = "-100%";
    img3.checked = true;
  }
  if(poradie == 4){
    slide1.style.right = "100%";
    slide2.style.right = "100%";
    slide3.style.right = "100%";
    slide4.style.right = "0%";
    slide5.style.right = "-100%";
    img4.checked = true;
  }
  if(poradie == 5){
    slide1.style.right = "100%";
    slide2.style.right = "100%";
    slide3.style.right = "100%";
    slide4.style.right = "100%";
    slide5.style.right = "0%";
    img5.checked = true;
  }
});

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

slideLeft.addEventListener("click", () => {
  if(poradie == 1){
    poradie = 1;
  }
  else{
  poradie--;
}
if(poradie == 1){
  slide1.style.right = "0%";
  slide2.style.right = "-100%";
  slide3.style.right = "-100%";
  slide4.style.right = "-100%";
  slide5.style.right = "-100%";
  img1.checked = true;
}
if(poradie == 2){
  slide1.style.right = "100%";
  slide2.style.right = "0%";
  slide3.style.right = "-100%";
  slide4.style.right = "-100%";
  slide5.style.right = "-100%";
  img2.checked = true;
}
if(poradie == 3){
  slide1.style.right = "100%";
  slide2.style.right = "100%";
  slide3.style.right = "0%";
  slide4.style.right = "-100%";
  slide5.style.right = "-100%";
  img3.checked = true;
}
if(poradie == 4){
  slide1.style.right = "100%";
  slide2.style.right = "100%";
  slide3.style.right = "100%";
  slide4.style.right = "0%";
  slide5.style.right = "-100%";
  img4.checked = true;
}
if(poradie == 5){
  slide1.style.right = "100%";
  slide2.style.right = "100%";
  slide3.style.right = "100%";
  slide4.style.right = "100%";
  slide5.style.right = "0%";
  img5.checked = true;
}
});


img1.addEventListener("click", ()=>{
  poradie = 1;
slide1.style.right = "0%";
slide2.style.right = "-100%";
slide3.style.right = "-100%";
slide4.style.right = "-100%";
slide5.style.right = "-100%";
});
img2.addEventListener("click", ()=>{
  poradie = 2;
  slide1.style.right = "-100%";
  slide2.style.right = "0%";
  slide3.style.right = "-100%";
  slide4.style.right = "-100%";
  slide5.style.right = "-100%";
  });
img3.addEventListener("click", ()=>{
  poradie = 3;
  slide1.style.right = "-100%";
  slide2.style.right = "-100%";
  slide3.style.right = "0%";
  slide4.style.right = "-100%";
  slide5.style.right = "-100%";
});
img4.addEventListener("click", ()=>{
  poradie = 4;
  slide1.style.right = "-100%";
  slide2.style.right = "-100%";
  slide3.style.right = "-100%";
  slide4.style.right = "0%";
  slide5.style.right = "-100%";
  });
img5.addEventListener("click", ()=>{
  poradie = 5;  
  slide1.style.right = "-100%";
  slide2.style.right = "-100%";
  slide3.style.right = "-100%";
  slide4.style.right = "-100%";
  slide5.style.right = "0%";
  });