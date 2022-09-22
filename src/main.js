let data = []
let favoritos = JSON.parse(localStorage.getItem("favoritospage")) || [];
let dataFiltered =[]
let contcards = document.getElementById('cont-cards')
let selectType = document.getElementById('selectType');
let selectSatus = document.getElementById('selectSatus');
let search = document.getElementById('search')
let btnSearch = document.getElementById('btnSearch') 

const getData = async () => {
    const URL_API = "http://localhost:3000/inmuebles";
    const response = await fetch(URL_API);
    data = await response.json();
    dataFiltered = data;
    console.log(data);
  renderCards()
 
  };
  getData()
 
  let renderCards = () =>{
   
    console.log('hola')
contcards.innerHTML='';
    dataFiltered.forEach((element)=>{

    contcards.innerHTML +=`
        <div class="cards">
        <figure>
            <div class="tipoIn">${element.tipo}</div>
            <div></div><div class="tipoIn forSale">${element.esta}</div><img src="${element.image_main}" alt="casa" class="casa">
        <div class="tipoIn price">${element.price}</div></figure>
        <div class="donde">${element.donde}  <span class="btnHeart" name="${element.id}">Favoritos >🌟<</span></div>
        <div class="direccion">${element.direccion}</div>
        <div class="quienHace">
            <p class="quien"><img src="${element.imgPerfil}" alt="" class="circulo"> ${element.quien}</p> <p class="hace">${element.hacecuanto}</p></div>
            
        <div class="contiene"><p class="medida"><img src="./img/image (1).png" alt="" class="miniImg"> ${element.cuantomide}</p>
            <div class="espe">
        <p class="medida"><img src="./img/image (2).png" alt="" class="miniImg">
        <b>${element.garajes}</b> </p>
        <p class="medida">
            <img src="./img/image (3).png" alt=""class="miniImg"> <b>${element.baños}</b>
        </p>
        <p class="medida"><img src="./img/image (4).png" alt=""class="miniImg" ><b>${element.dormitorios}</b> </p>
    </div>
    </div>
        `
    })}
    
    let handleSearch =() =>{
        let donde = search.value.toUpperCase()
      
        console.log(donde)
tipo = selectType.value
            console.log(tipo,donde);
            filterArray(tipo,donde)
          };
          const filterArray = (word,place) => {
            dataFiltered = data.filter((inmuebles) =>
              inmuebles.tipo.includes(word)&& inmuebles.donde.toUpperCase().includes(place));
            console.log(dataFiltered);
renderCards()
          };
    
    btnSearch.addEventListener('click',handleSearch);

    document.addEventListener("click", ({ target }) => {
        if (target.classList.contains("btnHeart")) {
          const savefav = dataFiltered.find(
            (item) => item.id == target.getAttribute("name")
          );
          const elementExist = favoritos.some((item) => item.id === savefav.id);
          console.log(elementExist);
          if (elementExist == false) {
            favoritos.push(savefav);
            localStorage.setItem("favoritospage", JSON.stringify(favoritos));
          }
        }
      });