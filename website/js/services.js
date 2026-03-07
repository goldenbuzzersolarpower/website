console.log("services.js loaded");
import { PARTNERS } from "./constant.js";

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

