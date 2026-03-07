import { EXECUTIVES, ABOUT_US, COMPANY_OVERVIEW } from "./constant.js";





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
<section class="ftco-section ftco-team" id="executiveDiv">

<div class="container-fluid px-md-5">

<div class="row justify-content-center pb-3">
<div class="col-md-10 heading-section text-center pt-5">
<span class="subheading">Words from Our Leaders</span>
<h2 class="mb-4">Executive Messages</h2>
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


const indicators = document.getElementById("about-indicators");
const inner = document.getElementById("about-carousel-inner");

ABOUT_US.forEach((about, index) => {

    indicators.innerHTML += `
        <li data-target="#aboutCarousel" data-slide-to="${index}" 
        class="${index === 0 ? "active" : ""}"></li>
    `;

    inner.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="row no-gutters d-flex">
            <div class="col-md-12 col-lg-12 d-flex align-self-stretch">
                <div class="media block-12 services d-block text-center">
                    <div class="row justify-content-center pb-3">
                        <div class="col-md-10 heading-section text-center">
                            <span class="subheading">more about us</span>
                            <h2 class="mb-4">${about.title}</h2>
                            ${about.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});


const overviewContainer = document.getElementById("company-overview");

COMPANY_OVERVIEW.forEach(item => {
    console.log(overviewContainer);
    overviewContainer.innerHTML += `
    <div class="col-md-6 col-lg-4 d-flex align-self-stretch">
      <div class="media block-6 services d-block text-center">
        <div class="media-body">
          <h3 class="heading mb-3">${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    </div>
  `;
});