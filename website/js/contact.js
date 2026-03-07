
import { CONTACT_DETAILS } from "./constant.js";

const contactContainer = document.getElementById("contact-details-container");

contactContainer.innerHTML = `
<div class="row">
    <div class="col-md-6 d-flex">
        <div class="p-md-5 img img-2 d-flex justify-content-center align-items-center"
            style="background-image: url(${CONTACT_DETAILS.image});">
        </div>
    </div>

    <div class="col-md-6 py-md-5 pb-5 wrap-about pb-md-5">
        <div class="heading-section mt-md-5">
            <span class="subheading">Office Address</span>
        </div>

        <div class="pb-md-1" style="text-align: justify;">
            <p>${CONTACT_DETAILS.address}</p>
        </div>

        <div class="heading-section">
            <span class="subheading">Email Address</span>
        </div>

        <div class="pb-md-1">
            <p>${CONTACT_DETAILS.email}</p>
        </div>

        <div class="heading-section">
            <span class="subheading">Mobile Number</span>
        </div>

        <div class="pb-md-1">
            <p>${CONTACT_DETAILS.mobile}</p>
        </div>

        <iframe
            src="${CONTACT_DETAILS.mapEmbed}"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>

    </div>
</div>
`;