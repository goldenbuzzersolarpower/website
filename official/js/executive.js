import { EXECUTIVE_DETAILS } from "./constant.js";

function loadExecutive() {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const exec = EXECUTIVE_DETAILS[id];

  if (!exec) return;

  const messageHTML = exec.message
    .map(p => `<p>${p}</p>`)
    .join("");

  document.getElementById("executive-content").innerHTML = `
<section class="ftco-section ftco-no-pb ftco-no-pt">
<div class="container" >

<div class="row">

<div class="col-md-6 d-flex">

<a href="${exec.image}" class="executive-zoom w-100">

<div class="p-md-5 img img-2 d-flex justify-content-center align-items-center"
style="
background-image:url(${exec.image});
background-position:center top;
background-size:cover;
background-repeat:no-repeat;
height:100%;
cursor: zoom-in;
">
</div>

</a>

</div>

<div class="col-md-6 py-md-5 pb-5 wrap-about pb-md-5">

<div class="heading-section mb-4 mt-md-5">
<span class="subheading">${exec.position}</span>
<h3 class="mb-4">${exec.name}</h3>
</div>

<div class="pb-md-0" style="text-align: justify;">
${messageHTML}
</div>

</div>

</div>

</div>
</section>
`;

  $('.executive-zoom').magnificPopup({
    type: 'image',
    gallery: {
      enabled: false
    }
  });

}

document.addEventListener("DOMContentLoaded", loadExecutive);


import { EXECUTIVES } from "./constant.js";

function loadExecutives() {

  const execHTML = EXECUTIVES.map(e => `
<div class="item">
<a href="${e.link}" class="team text-center">

<div class="img"
style="background-image: url(${e.image});"></div>

<h2>${e.name}</h2>
<span class="position">${e.position}</span>

</a>
</div>
`).join("");

  document.getElementById("executives-container").innerHTML = `
<section class="ftco-section ftco-team" id="executiveDiv" style="margin-top: 0;padding-top: 0;">

<div class="container-fluid">

<div class="row justify-content-center pb-3">
<div class="col-md-10 heading-section text-center pt-5">
<span class="subheading">Words from Our Leaders</span>
</div>
</div>

<div class="row">
<div class="col-md-12">

<div class="carousel-team owl-carousel">
${execHTML}
</div>

</div>
</div>

</div>
</section>
`;

  initializeCarousel();

}

function initializeCarousel() {

  $('.carousel-team').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });

}

document.addEventListener("DOMContentLoaded", loadExecutives);