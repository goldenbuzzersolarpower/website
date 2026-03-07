console.log("services.js loaded");
import { PARTNERS, SERVICES_DETAILS, PACKAGE_IMAGES } from "./constant.js";


function loadPackages() {

    const pkgHTML = PACKAGE_IMAGES.map(p => `
        <div class="item">
            <a href="${p.image}" class="package zoom-popup">
                <div class="img"
                    style="background-image:url(${p.image});
                    height:400px;
                    background-size:cover;
                    background-position:top;">
                </div>
            </a>
        </div>
    `).join("");

    document.getElementById("packages-container").innerHTML = `

<section>

<div class="container-fluid px-md-5">

<div class="row justify-content-center pb-3">
<div class="col-md-10 heading-section text-center pt-0">
<span class="subheading">Our Solar Solutions</span>
<h2 class="mb-4">Solar Packages</h2>
</div>
</div>

<div class="row">
<div class="col-md-12">

<div class="carousel-packages owl-carousel">
${pkgHTML}
</div>

</div>
</div>

</div>

</section>
`;

    initializePackagesCarousel();

}
function initializePackagesCarousel() {

    const carousel = $('.carousel-packages');

    carousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 }
        }
    });

    // zoom
    carousel.find('.zoom-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

}

document.addEventListener("DOMContentLoaded", loadPackages);

const indicators = document.getElementById("services-indicators");
const inner = document.getElementById("services-carousel-inner");

SERVICES_DETAILS.forEach((service, index) => {

    let contentHTML = "";

    if (service.type === "list") {
        contentHTML = `
<ul style="list-style-type:none;padding:0;text-align:center;">
${service.content.map(item => `<li>${item}</li>`).join("")}
</ul>
`;
    }

    if (service.type === "text") {
        contentHTML = `
<p class="text-justify" style="padding-left:2%;padding-right:2%;">
${service.content}
</p>
`;
    }

    indicators.innerHTML += `
<li data-target="#servicesCarousel"
data-slide-to="${index}"
class="${index === 0 ? "active" : ""}">
</li>
`;

    inner.innerHTML += `
<div class="carousel-item ${index === 0 ? "active" : ""}">
<div class="row no-gutters d-flex">
<div class="col-md-12 col-lg-12 d-flex align-self-stretch">

<div class="media col-lg-12 services d-block text-center">

<div class="row justify-content-center pb-5">

<div class="col-md-12 heading-section text-center">

<span class="subheading">our services</span>

<h2 class="mb-4">${service.title}</h2>

${contentHTML}

</div>

</div>

</div>

</div>
</div>
</div>
`;
});

function loadPartners() {
    console.log(document.getElementById("partners-container"));
    const partnersHTML = PARTNERS.map(p => `
<div class="col-md-6 col-lg-3">
<div class="project">

<img src="${p.image}" class="img-fluid">

<div class="text" style="max-height: 100%; overflow-y: auto;">
<span><h2 style="color:white;">${p.name}</h2></span>

<h3><a href="#">${p.title}</a></h3>

<p style="color: beige; padding-left:10px; text-align: justify;">
<strong>Why We Chose Them:</strong><br>
${p.why}
<br><br>
<strong>What This Protects You From:</strong><br>
${p.protects}
</p>

</div>

<a href="${p.image}" class="icon image-popup d-flex justify-content-center align-items-center">
<span class="icon-expand"></span>
</a>

</div>
</div>
`).join("");

    document.getElementById("partners-container").innerHTML = `
<section class="ftco-section ftco-no-pt ftco-no-pb">
<div class="container-fluid p-0">

<div class="row justify-content-center pb-3">
<div class="col-md-10 heading-section text-center  pt-5">
<span class="subheading">Our</span>
<h2 class="mb-4">Partners</h2>
</div>
</div>

<div class="row no-gutters">
${partnersHTML}
</div>

</div>
</section>
`;

    // Initialize magnific popup for the newly added image popups
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
}
loadPartners();

