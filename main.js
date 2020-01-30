const personas =[
    
    {
        nombre: "Pepita Gomez", 
        descripcion: "Maquetadora",
        foto: "img/avatar-2.svg"
    },
    {
        nombre: "Mariquita Thompson", 
        descripcion: "Cantante de himno",
        foto: "img/avatar-3.jpg"
    },
    {
        nombre: "Pancracia Williams", 
        descripcion: "Tenista",
        foto: "img/avatar.png"
    },
          
];


const art = document.getElementsByTagName("article")
const article = art[0];
let htmlCards = ""
for (let i = 0; i < personas.length; i++) {
    htmlCards = htmlCards + `
    <div class="card">
        <div class="imagen">
            <img src= "${personas[i].foto}">
        </div>
            
        <div class="informacion">
            <h2>${personas[i].nombre}</h2>
            <p>${personas[i].descripcion}</p>
            <p><i class="fa fa-heart"></i> <span class="likes">0</span> likes</p>
        </div>
    </div>
    `
}

article.innerHTML = htmlCards


const imagenes = document.getElementsByClassName('imagen');
const corazones = document.getElementsByClassName('fa-heart');
const likes = document.getElementsByClassName('likes');

for (let i = 0; i < personas.length; i++) {
    imagenes[i].ondblclick = () => {
    corazones[i].classList.add("rojo")
    let cantidadDeLikes = Number(likes[i].textContent)
    cantidadDeLikes++
    likes[i].textContent = cantidadDeLikes
    }

    corazones[i].onclick = () => {
    if (likes[i].textContent > "0") {
    let cantidadDeLikes = Number(likes[i].textContent)
    cantidadDeLikes--
    likes[i].textContent = cantidadDeLikes
    }
  
    if (likes[i].textContent == "0") {
        corazones[i].classList.remove("rojo")
    }

    else {
        corazones[i].classList.add("rojo")
    }

    }
}