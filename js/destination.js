//javascript for the destination page for the gallery light box and leaflet map
const thumbnails = document.querySelectorAll(".gallery-thumb");
// gets all the small gallery images on the page

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
// gets the big overlay box, the big image, the caption and the close button



thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    lightboxImg.src = thumb.src;
    // puts the clicked image into the big view

  
    lightboxImg.alt = thumb.alt;
    lightboxCaption.textContent = thumb.alt;
    // uses the image's alt text as the caption so the user knows wha the place is

    lightbox.classList.add("open");
    // adds the open class which makes the overlay appear
  });
});



function closeLightbox() {
  lightbox.classList.remove("open");
}
// created a short function to hide the overlay again




lightboxClose.addEventListener("click", closeLightbox);
// closes when the button is clicked

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
// This closes when the user clicks the dark area outside of the image

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
// This closes when a user click esc (escape)




const destinations = [
  { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
  { name: "Kruger National Park", lat: -23.9884, lng: 31.5547 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { name: "Garden Route (Knysna)", lat: -34.0351, lng: 23.0465 },
  { name: "Drakensberg", lat: -28.7500, lng: 29.0000 },
  { name: "Durban", lat: -29.8587, lng: 31.0218 }
];
// a list of the destinations with their names and their map coordinates



const map = L.map("map").setView([-29.0, 25.0], 5);
// creates a map and puts it over South Africa with a zoom level


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors"
}).addTo(map);
// adds the actual map images as tiles from the OpenStreetMap


destinations.forEach(function (place) {
  L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup("<strong>" + place.name + "</strong>");
});
// goes through every destination and adds a marker with a popup label and also each marker shows the destination/place's name when click on




// The code section below lets the user type to filter the destinations/places and chooses how to sort them
const searchInput = document.getElementById("destinationSearch");
const sortSelect = document.getElementById("destinationSort");
const noResults = document.getElementById("noResults");

const destinationSections = Array.from(document.querySelectorAll(".destination-grid"));
const introSection = document.querySelector(".destination-intro");


function filterDestinations() {
  const query = searchInput.value.toLowerCase().trim();
  let matches = 0;

  destinationSections.forEach(function (section) {
    const card = section.querySelector(".destination-card");
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      section.style.display = "";
      matches++;
    } else {
      section.style.display = "none";
    }
  });
  // This filters the destinations/places that the user typed in the search box


  noResults.textContent = matches === 0 ? "No destinations match your search." : "";
}


function sortDestinations() {
  const order = sortSelect.value;
  let sorted = destinationSections.slice();

  if (order === "az" || order === "za") {
    sorted.sort(function (a, b) {
      const nameA = a.querySelector("h2").textContent.toLowerCase();
      const nameB = b.querySelector("h2").textContent.toLowerCase();
      if (nameA < nameB) return order === "az" ? -1 : 1;
      if (nameA > nameB) return order === "az" ? 1 : -1;
      return 0;
    });
  }

  sorted.forEach(function (section) {
    introSection.appendChild(section);
  });
}

searchInput.addEventListener("keyup", filterDestinations);
sortSelect.addEventListener("change", sortDestinations);
// sorts the destinations by name depending on the option 