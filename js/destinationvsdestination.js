//This javascript file will be used for the destination vs destination page when it comes to comparing the different places

const places = {
    "Cape Town": {
        located: "Western Cape",
        attractions: "Table Mountain, Camps Bay, V&A Waterfront",
        activities: "Sightseeing, Fun beach time, watching some entertaining performances, Hiking",
        visit: "Summer times",
        travellingrequirements: "Free to travel however you like to"
    },
//added information for Cape Town

    "kruger National Park": {
        located: "Mpumalanga & Limpopo",
        attractions: "Wildlife, Exploring and see the safari routes, Relaxing, Seeing and exploring the natural landscapes",
        activities: "Wildlife Sightseeing, Photographing wildlife, Game drives",
        visit: "Summer, winter or dry times",
        travellingrequirements: "Drive or take a plane"
    },
//added information for The Kruger National Park

    "Johannesburg": {
       located: "Gauteng",
        attractions: "Nelson Mandela Square, Montecasino, Gold Reef City, Constitution Hills",
        activities: "Sightseeing, shopping at places, watch some entertaining performances, Visting museums of South Africa's history, Going on Tour to learn more about the history", 
        visit: "Anytime",
        travellingrequirements: "Free to travel however you like to" 
    },
//added information for Johannesburg

    "Garden Route District Municipality": {
       located: "Western Cape and Eastern Cape",
        attractions: "Stroms River, Knynsa, Plettenberg Bay",
        activities: "Sightseeing nature, Explore and adventure through forests, Hiking",
        visit: "Anytime but recommended when it's warm",
        travellingrequirements: "Recommended to travel on the road to have the full experience"
    
    },
//added information for Garden Route Municipality

    "Drakensberg": {
        located: "KZN",
        attractions: "Tugela Falls, Rock art sites, Mountain",
        activities: "Sightseeing nature, Taking photos, Hiking, nature walks, Mountain Sightseeing",
        visit: "Cool or dry times",
        travellingrequirements: "Travel on road"
    },
//added information for Drakensburg
    
    "Durban": {
        located: "KZN",
        attractions: "Durban Botanic Garden, uShaka Marine World, Golden Mile",
        activities: "Swimming and having fun at the beach, Surfing, Sightseeing",
        visit: "Anytime but when the warm whether isn't too bad",
        travellingrequirements: "Free to travel however you like to"

    }
};

const compareButton = document.getElementById("compareButton")

compareButton.addEventListener("click", function () {
    const option1 = document.getElementById("destination1").value;
const option2 = document.getElementById("destination2").value;
const invalid = document.getElementById("compareError");
//created constants that will be used 


if (option1 === "" || option2 === "" ) {
    invalid.textContent = "Please choose 2 destinations you would like to compare";
    return;
}
//if both dropdowns don't have a selected destination it will then give this error meesage to the user

if (option1 === option2) {
    invalid.textContent = "Please select two different places for comparing"
    return;

}
//if the same destination has been selected twice then it will return this error message

invalid.textContent = "";
//This will clear previous errors 


const d1 = places[option1];
const d2 = places[option2];

document.getElementById("name1").textContent = option1;
document.getElementById("name2").textContent = option2;
//The two places will be put into the table headings


document.getElementById("d1-located").textContent = d1.located
document.getElementById("d1-attractions").textContent = d1.attractions
document.getElementById("d1-activities").textContent = d1.activities
document.getElementById("d1-visit").textContent = d1.visit
document.getElementById("d1-travellingrequirements").textContent = d1.travellingrequirements
//The details will be filled in using what has been written in the constants of the places e.g. cape town storing different information

document.getElementById("d2-located").textContent = d2.located
document.getElementById("d2-attractions").textContent = d2.attractions
document.getElementById("d2-activities").textContent = d2.activities
document.getElementById("d2-visit").textContent = d2.visit
document.getElementById("d2-travellingrequirements").textContent = d2.travellingrequirements
//The details will be filled in using what has been written in the constants of the places e.g. cape town storing different information



});
