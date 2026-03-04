// Set page title using company name from constants
document.title = company;

// Loop through items_company array and replace innerHTML of elements with company value
items_company.forEach(function (elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = company;
    }
});



