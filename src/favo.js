let favoritos = JSON.parse(localStorage.getItem("favoritospage")) || [];
console.log(favoritos)
const contcards=document.getElementById('cont-cards')
const renderData = () => {
  contcards.innerHTML = "";
    favoritos.forEach((element) => {
      contcards.innerHTML += `
      <div class="cards cartas">
      <figure>
          <div class="tipoIn">${element.tipo}</div>
          <div></div><div class="tipoIn forSale">${element.esta}</div><img src="${element.image_main}" alt="casa" class="casa tamaña">
      <div class="tipoIn price">${element.price}</div></figure>
      <div class="donde">${element.donde}  </div>
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
          `;
    });
  };
  renderData()