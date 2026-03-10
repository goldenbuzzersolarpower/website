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

let currentPage = 1;
const ITEMS_PER_PAGE = 5;

function renderFAQs() {

	const start = (currentPage - 1) * ITEMS_PER_PAGE;
	const end = start + ITEMS_PER_PAGE;
	const paginatedFAQs = FAQS.slice(start, end);

	const faqItems = paginatedFAQs.map((f, index) => {

		const realIndex = start + index;

		return `
		<div class="card">

			<div class="card-header" id="faqHeading${realIndex}">
				<h5 class="mb-0">
					<button class="btn btn-link d-flex justify-content-between align-items-center w-100 ${index !== 0 ? 'collapsed' : ''}"
	data-toggle="collapse"
	data-target="#faqCollapse${realIndex}"
	aria-expanded="${index === 0 ? 'true' : 'false'}">

	<span>${f.question}</span>

	<span class="faq-icon"></span>

</button>
				</h5>
			</div>

			<div id="faqCollapse${realIndex}"
				class="collapse ${index === 0 ? 'show' : ''}"
				data-parent="#faqAccordion">

				<div class="card-body">
					${f.answer}
				</div>

			</div>

		</div>
		`;

	}).join("");

	document.getElementById("faqAccordion").innerHTML = faqItems;
}

function renderPagination() {

	const totalPages = Math.ceil(FAQS.length / ITEMS_PER_PAGE);

	let paginationHTML = "";

	for (let i = 1; i <= totalPages; i++) {

		paginationHTML += `
		<button class="btn ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1 page-btn"
		data-page="${i}">
			${i}
		</button>
		`;

	}

	document.getElementById("faqPagination").innerHTML = paginationHTML;

	document.querySelectorAll(".page-btn").forEach(btn => {

		btn.addEventListener("click", function () {

			currentPage = parseInt(this.dataset.page);

			renderFAQs();
			renderPagination();

		});

	});
}

function loadFAQs() {

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

<div id="faqAccordion"></div>

<div id="faqPagination" class="text-center mt-4"></div>

</div>

</div>

</div>

</section>
`;

	renderFAQs();
	renderPagination();
}

document.addEventListener("DOMContentLoaded", loadFAQs);