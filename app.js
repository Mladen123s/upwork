function scrollApear(){
  var text = document.querySelector(".text-section");
  var textPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (textPosition < screenPosition){
    text.classList.add('text-section-active');
  }
}

   window.addEventListener('scroll', scrollApear);



   

   function scrollApear1(){
  var text = document.querySelector(".aw");
  var textPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (textPosition < screenPosition){
    text.classList.add('text-section-active');
  }
}

   window.addEventListener('scroll', scrollApear1);


   const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
   const navLinks = document.getElementsByClassName("nav-links")[0]

  toggleBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("active")
  })