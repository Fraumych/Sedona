
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav-toggle');      

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav-closed')) {
    navMain.classList.remove('main-nav-closed');
    navMain.classList.add('main-nav-opened');
  }
  
  else {
    navMain.classList.add('main-nav-closed');
    navMain.classList.remove('main-nav-opened');
  }
});

let showSearchHotel = document.querySelector(".modal-address")
let buttonSerchHotel = document.querySelector(".primary-button")


  buttonSerchHotel.addEventListener("click", function(){
    if (showSearchHotel.classList.contains("modal-address-show")) {
      showSearchHotel.classList.remove("modal-address-show");
      showSearchHotel.classList.add("modal-address")}
      else {
        showSearchHotel.classList.add("modal-address-show");
      showSearchHotel.classList.remove("modal-address")
  }
}
)