/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector("#mySidenav").style.width = "300px";
    document.querySelector("#main").style.marginLeft = "300px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
    document.getElementById('#main').style.marginLeft = "0";
  }