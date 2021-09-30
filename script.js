
const newDog = document.createElement("div");
const image = document.createElement("img");
const title = document.createElement("h2");
const parraf = document.createElement("p");
const btn = document.createElement("button");
const icon = document.createElement("i");
const like = document.createElement("span");
const cont = document.createElement("span");
let gustado = 0 ;



image.src="https://picsum.photos/id/237/500/500";
image.alt="Perro bebe";
title.textContent= "Hola soy un perro bebe!";


newDog.classList.add("dog");
btn.classList.add("button");
btn.textContent = "Clic para leer mas sobre mi";
cont.textContent = 0;
icon.classList.add("far");
icon.classList.add("fa-heart");
icon.style.cursor= "pointer";
cont.style.margin="10px";
like.classList.add("likes");

document.body.appendChild(newDog);
newDog.appendChild(image);
newDog.appendChild(title);
newDog.appendChild(parraf);
newDog.appendChild(like);
like.appendChild(icon);
like.appendChild(cont);
newDog.appendChild(btn);

const showMore = () =>
  (document.querySelector(".moreInfo").style.display = "block");

const pushlike = ()=>{ 
 gustado=gustado+1;
 cont.textContent=gustado;
 console.log(gustado);
}

document.querySelector(".likes").addEventListener("click",pushlike);


