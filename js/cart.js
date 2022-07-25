const textCart = document.querySelector('#cart-text');
const carrito = document.querySelector('#mySidenav');
const contenedorCarrito = document.querySelector('#list-cart tbody');
const listProd = document.querySelector('#listProd');
const cartCount = document.querySelector('.cart-count');
let artCart = [];
let totalCount = 0;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector("#mySidenav").style.width = "400px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
  }

  cargarEventListeners();
function cargarEventListeners(){
  // Add to cart with button
  listProd.addEventListener('click',addProd)
  //Remove to cart
  carrito.addEventListener('click',removeProd)

}

function addProd(e){
  e.preventDefault();
  if(e.target.classList.contains('addCart')){
    const targetProd = e.target.parentElement.parentElement;
    leerDatos(targetProd);
    console.log(targetProd)
  }
};
function removeProd(e){
  if(e.target.classList.contains('borrar-curso')){
      const prodId = e.target.getAttribute('data-id');

      artCart = artCart.filter(prod => prod.id !== prodId);
        if(prodId){
          cartCount.textContent = artCart.length
        }
      carritoHTML();

  }

}

function leerDatos(prod){
  const infoProds = {
    imagen: prod.querySelector('img').src,
    producto: prod.querySelector('p').textContent,
    precio: prod.querySelector('span').textContent,
    id: prod.querySelector('button').getAttribute('data-id'),
    cantidad: 1
  }
  const existe = artCart.some(prod => prod.id === infoProds.id);
        if(existe){
            const prods = artCart.map(prod =>{
                if(prod.id === infoProds.id){
                    prod.cantidad++;
                    return prod; // RETORNA EL OBJETO ACTUALIZADO
        
                }else{
                    return prod;// RETORNA LOS OBJETOS NO DUPLICADOS
                    

                }
            })
        }else{
            artCart = [...artCart, infoProds];
            cartCount.textContent = artCart.length;
        }
  if( artCart !== 0 ){
    textCart.style.visibility = 'hidden';
  }
 
    carritoHTML();
}
function carritoHTML(){
  //Limpiar el HTML
  limpiarHTML();
  //Recorre el carrito y genera el HTML
  artCart.forEach( prod => {
      const row = document.createElement('tr');
      const { imagen, producto, precio, cantidad, id } = prod;
      row.innerHTML = `
          <td>
              <img src='${imagen}' >
          </td>
          <td>
              ${producto}
          </td>
          <td>
              ${precio}
          </td>
          <td>
              ${cantidad}
          </td>
          <td>
              <a href='#' class='borrar-curso' data-id='${id}'> X </a>
          </td>
      `;
      //Agregar el HTML del carrito al tbody
      contenedorCarrito.appendChild(row);

  })
};

function limpiarHTML(){
    
  while(contenedorCarrito.firstChild){
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
  //Forma lenta
  //contenedorCarrito.innerHTML = '';
};

