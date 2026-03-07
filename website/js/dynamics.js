

import { NAV_ITEMS, company, FOOTER } from "./constant.js";


document.title = company;
function loadNavbar() {

  let navLinks = NAV_ITEMS.map(item => {
    return `
      <li class="nav-item ${item.active ? "active" : ""}">
        <a href="${item.link}" class="nav-link">${item.name}</a>
      </li>
    `;
  }).join("");

  const navbarHTML = `
  <nav class="navbar navbar-expand-xl navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">
       <span> <img src="images/logo.png" alt="SVG Icon" width="50"
						height="auto"></span>
        ${company}
      </a>
     
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          ${navLinks}
        </ul>
      </div>
    </div>
  </nav>
  `;

  document.getElementById("navbar-container").innerHTML = navbarHTML;
}


function loadFooter() {

  const socialHTML = FOOTER.social
    .map(s => `<li class="ftco-animate"><a href="${s.link}"><span class="${s.icon}"></span></a></li>`)
    .join("");

  const infoHTML = FOOTER.information
    .map(i => `<li><a href="${i.link}" class="py-2 d-block">${i.name}</a></li>`)
    .join("");

  const linksHTML = FOOTER.links
    .map(l => `<li><a href="${l.link}" class="py-2 d-block">${l.name}</a></li>`)
    .join("");

  const footerHTML = `
<footer class="ftco-footer ftco-section">
<div class="container">
<div class="row mb-5">

<div class="col-md">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2 logo">${FOOTER.companyName}</h2>
<p>${FOOTER.description}</p>

<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
${socialHTML}
</ul>
</div>
</div>

<div class="col-md">
<div class="ftco-footer-widget mb-4 ml-md-5">
<h2 class="ftco-heading-2">Information</h2>
<ul class="list-unstyled">
${infoHTML}
</ul>
</div>
</div>

<div class="col-md">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2">Links</h2>
<ul class="list-unstyled">
${linksHTML}
</ul>
</div>
</div>

<div class="col-md">
<div class="ftco-footer-widget mb-4">
<h2 class="ftco-heading-2">Have a Questions?</h2>

<div class="block-23 mb-3">
<ul>
<li>
<span class="icon icon-map-marker"></span>
<span class="text">${FOOTER.contact.address}</span>
</li>

<li>
<a href="tel:${FOOTER.contact.phone}">
<span class="icon icon-phone"></span>
<span class="text">${FOOTER.contact.phone}</span>
</a>
</li>

<li>
<a href="mailto:${FOOTER.contact.email}">
<span class="icon icon-envelope"></span>
<span class="text">${FOOTER.contact.email}</span>
</a>
</li>
</ul>
</div>

</div>
</div>

</div>

<div class="row">
<div class="col-md-12 text-center">
<p>
Copyright © ${new Date().getFullYear()} All rights reserved. | This template
						is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a
							href="https://colorlib.com" target="_blank">Colorlib</a> and has been modified.
</p>
</div>
</div>

</div>
</footer>
`;

  document.getElementById("footer-container").innerHTML = footerHTML;
}

loadFooter();

loadNavbar();