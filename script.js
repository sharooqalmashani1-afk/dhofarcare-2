function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function handleForm(e) {
  e.preventDefault();
  alert("شكراً! تم استلام طلبك في DhofarCare. سيتم التواصل معك من فريق ظفار.");
  e.target.reset();
}
