const btnBuy = document.querySelectorAll('.btn-buy');
const geeks = document.querySelectorAll('.geeks'); 

for (let i = 0; i < geeks.length; i++) {
  geeks[i].addEventListener("mouseover", function() {        
      btnBuy[i].style.opacity = '1';
      //btnBuy[i].classList.toggle("red");
  
  });
}

for (let i = 0; i < geeks.length; i++) {
  geeks[i].addEventListener("mouseleave", function() {        
      btnBuy[i].style.opacity = '0';
      //btnBuy[i].classList.toggle("red");
  
  });
};
