const menu = document.querySelector(".cart_menu");
const account= document.querySelector(".account");

document.getElementById("carticon").onclick = function() {showcart()};
document.getElementById("closeIcon").onclick = function() {showcart()};
document.getElementById("account").onclick = function() {showaccount()};


function showcart(){
    if (menu.classList.contains("show_cart")) {
        menu.classList.remove("show_cart");
        
      } else {
        menu.classList.add("show_cart");
       
      }
}



function showaccount(){
    if (account.classList.contains("showaccount")) {
        account.classList.remove("showaccount");
        
      } else {
        account.classList.add("showaccount");
       
      }
}






