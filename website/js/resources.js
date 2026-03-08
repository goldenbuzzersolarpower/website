import { TESTIMONIAL_VIDEOS, FAQS } from "./constant.js";

const playlistContainer = document.getElementById("playlistContainer");
const mainVideo = document.getElementById("mainVideo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");



// Set the first video in the main player
mainVideo.src = `https://www.youtube.com/embed/${TESTIMONIAL_VIDEOS[0].id}`;

// Generate playlist items
TESTIMONIAL_VIDEOS.forEach(video => {
	const videoItem = document.createElement("div");
	videoItem.classList.add("video-item");
	videoItem.innerHTML = `
				<img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" class="video-thumbnail" data-video-id="${video.id}">
				<span class="video-title">${video.title}</span>
			`;
	playlistContainer.appendChild(videoItem);
});

// Event listener to update the main video when a thumbnail is clicked
document.querySelectorAll(".video-item").forEach(item => {
	item.addEventListener("click", function () {
		const videoId = this.querySelector(".video-thumbnail").getAttribute("data-video-id");
		mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
	});
});





function loadFAQs() {

	const faqItems = FAQS.map((f, index) => `

<div class="card">

<div class="card-header" id="faqHeading${index}">

<h5 class="mb-0">

<button class="btn btn-link ${index !== 0 ? 'collapsed' : ''}"
data-toggle="collapse"
data-target="#faqCollapse${index}"
aria-expanded="${index === 0 ? 'true' : 'false'}"
aria-controls="faqCollapse${index}">

${f.question}

</button>

</h5>

</div>

<div id="faqCollapse${index}"
class="collapse ${index === 0 ? 'show' : ''}"
aria-labelledby="faqHeading${index}"
data-parent="#faqAccordion">

<div class="card-body">

${f.answer}

</div>

</div>

</div>

`).join("");

	document.getElementById("faq-container").innerHTML = `

<section class="ftco-section">

<div class="container">

<div class="row justify-content-center pb-3">
<div class="col-md-10 heading-section text-center">
<span class="subheading">Frequently Asked Questions</span>
<h2 class="mb-4 text-white">FAQs</h2>
</div>
</div>

<div class="row justify-content-center">

<div class="col-md-8">

<div id="faqAccordion">

${faqItems}

</div>

</div>

</div>

</div>

</section>

`;

}

document.addEventListener("DOMContentLoaded", loadFAQs);