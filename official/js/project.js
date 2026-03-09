import { PROJECTS, COMMERCIAL_PROJECTS } from "./constant.js";

function loadProjects() {

    const indicators = PROJECTS.map((p, index) => `
<li data-target="#projectsCarousel"
data-slide-to="${index}"
class="${index === 0 ? "active" : ""}">
</li>
`).join("");

    const slides = PROJECTS.map((p, index) => `
<div class="carousel-item ${index === 0 ? "active" : ""}" style="
background:#fff;
padding:10px;
border-radius:4px;
box-shadow:0 12px 30px rgba(0,0,0,0.25);
border:1px solid #eee;
">

<div class="row">

<div class="col-md-6 d-flex">

<a href="${p.image}" class="project-zoom w-100">

<div class="img img-2 w-100"
style="
background-image:url(${p.image});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
min-height:500px;
cursor: zoom-in;">
</div>

</a>

</div>

<div class="col-md-6 py-md-5 pb-5 wrap-about pb-md-5">

<div class="heading-section mb-4 mt-md-5">
<span class="subheading">Project Details</span>
</div>

<div class="pb-md-5" style="text-align: justify;">
<ul>
<li>Installed Capacity : ${p.capacity}</li>
<li>System Type: ${p.system}</li>
<li>Location: ${p.location}</li>
<li>Client: ${p.client}</li>
</ul>
</div>

</div>

</div>

</div>
`).join("");

    document.getElementById("projects-container").innerHTML = `

<section class="ftco-section ftco-no-pb ftco-no-pt">

<div class="container">
<div class="row justify-content-center pb-3">
				<div class="col-md-10 heading-section text-center">
					<span class="subheading">Our</span>
					<h2 class="mb-4">Residential Projects</h2>

				</div>
			</div>
<div id="projectsCarousel" class="carousel slide pb-5" data-ride="carousel" >

<ol class="carousel-indicators">
${indicators}
</ol>

<div class="carousel-inner  pb-5" >
${slides}
</div>

<a class="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"></span>
</a>

<a class="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">
<span class="carousel-control-next-icon"></span>
</a>

</div>

</div>

</section>

`;
    $('.project-zoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadProjects();

    $(document).on('click', '.project-zoom', function (e) {
        e.preventDefault();
    });

    $('.project-zoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


function loadCommercialProjects() {

    const indicators = COMMERCIAL_PROJECTS.map((p, index) => `
<li data-target="#commercialCarousel"
data-slide-to="${index}"
class="${index === 0 ? 'active' : ''}">
</li>
`).join("");

    const slides = COMMERCIAL_PROJECTS.map((p, index) => {

        const gallery = p.gallery.map(img => `
<div class="col-md-4 text-center mb-3" >
<a href="${img}" class="commercial-zoom">
<img src="${img}" class="img-fluid rounded shadow-sm"
style="max-height:222200px; object-fit:cover;">
</a>
</div>
`).join("");

        return `
<div class="carousel-item ${index === 0 ? 'active' : ''}">

<div class="container" style="
background:#fff;
padding:10px;
border-radius:4px;
box-shadow:0 12px 30px rgba(0,0,0,0.25);
border:1px solid #eeeeee;
">

<!-- Banner -->
<div class="row mb-4">
<div class="col-md-12">
<a href="${p.banner}" class="commercial-zoom">

<div style="
width:100%;
height:500px;
background-image:url('${p.banner}');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,0.15);
cursor:zoom-in;
">
</div>

</a>
</div>
</div>

<!-- Details -->
<div class="row mb-4">

<div class="col-md-4">
<h5>PROJECT DETAILS</h5>
<ul>
<li>Installed Capacity : ${p.details.capacity}</li>
<li>Location : ${p.details.location}</li>
<li>Tunnel Vent : ${p.details.tunnelVent}</li>
<li>Farm Scale : ${p.details.farmScale}</li>
<li>Client : ${p.details.client}</li>
</ul>
</div>

<div class="col-md-4">
<h5>TECHNICAL HIGHLIGHTS</h5>
<ul>
${p.highlights.map(h => `<li>${h}</li>`).join("")}
</ul>
</div>

<div class="col-md-4">
<h5>SUMMARY</h5>
<p style="text-align:justify">${p.summary}</p>
</div>

</div>

<!-- Gallery -->
<div class="row justify-content-center">
${gallery}
</div>

</div>

</div>
`;

    }).join("");

    document.getElementById("commercial-projects-container").innerHTML = `

<section>

<div class="container">

<div class="row justify-content-center">
<div class="col-md-10 heading-section text-center">
<span class="subheading">Featured Installations</span>
<h2 class="mb-4">Commercial Solar Projects</h2>
</div>
</div>

<div id="commercialCarousel" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
${indicators}
</ol>

<div class="carousel-inner pb-5">
${slides}
</div>

<a class="carousel-control-prev" href="#commercialCarousel" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"></span>
</a>

<a class="carousel-control-next" href="#commercialCarousel" role="button" data-slide="next">
<span class="carousel-control-next-icon"></span>
</a>

</div>

</div>

</section>
`;

    initializeCommercialZoom();
}

function initializeCommercialZoom() {

    $('.commercial-zoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

}

document.addEventListener("DOMContentLoaded", loadCommercialProjects);