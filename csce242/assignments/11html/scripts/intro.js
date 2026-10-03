class Vacation {

    constructor(title, type, description, thingsToDo, image, mapSrc) {

        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {

        const section = document.createElement("section");
        section.classList.add("vacation-card");

        const h2 = document.createElement("h2");
        h2.textContent = this.title;

        const p = document.createElement("p");
        p.textContent = this.type + " Vacation";

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;

        section.append(h2);
        section.append(p);
        section.append(img);

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    showModal() {
        document.getElementById("modal-title").innerHTML = this.title;
        document.getElementById("modal-type").innerHTML = this.type;
        document.getElementById("modal-description").innerHTML = this.description;
        document.getElementById("modal-things").innerHTML = this.thingsToDo;
        document.getElementById("modal-map").src = this.mapSrc;
        document.getElementById("vacation-modal").style.display = "block";
    }
}

const vacations = [
    new Vacation(
        "Rome",
        "City",
        "A historic Italian city filled with ancient landmarks, architecture, and culture.",
        "Visit the Colosseum, see the Trevi Fountain, explore Vatican City, and visit the Pantheon.",
        "images/rome.jpg",
        "https://www.google.com/maps?q=Rome,Italy&output=embed"
    ),

    new Vacation(
        "Tokyo",
        "City",
        "A modern Japanese city known for technology, shopping, food, and traditional culture.",
        "Visit Tokyo Tower, explore Shibuya, see Senso-ji Temple, and try local Japanese food.",
        "images/tokyo.jpg",
        "https://www.google.com/maps?q=Tokyo,Japan&output=embed"
    ),

    new Vacation(
        "Paris",
        "City",
        "A famous French city known for art, architecture, food, and historic landmarks.",
        "Visit the Eiffel Tower, explore the Louvre Museum, see the Arc de Triomphe, and walk along the Seine River.",
        "images/paris.jpg",
        "https://www.google.com/maps?q=Paris,France&output=embed"
    ),

    new Vacation(
        "London",
        "City",
        "A historic city in England known for famous landmarks, museums, and royal history.",
        "Visit Big Ben, Buckingham Palace, the London Eye, and Tower Bridge.",
        "images/london.jpg",
        "https://www.google.com/maps?q=London,England&output=embed"
    ),

    new Vacation(
        "Switzerland",
        "Mountain",
        "A scenic European destination known for the Alps, lakes, mountain villages, and beautiful landscapes.",
        "Explore the Swiss Alps, visit Lake Geneva, ride mountain trains, and visit cities such as Zurich and Lucerne.",
        "images/switzerland.jpg",
        "https://www.google.com/maps?q=Switzerland&output=embed"
    ),

    new Vacation(
        "Cancun",
        "Beach",
        "A tropical Mexican destination known for clear water, sandy beaches, resorts, and warm weather.",
        "Relax on the beach, go snorkeling, visit nearby Mayan ruins, and explore Isla Mujeres.",
        "images/cancun.jpg",
        "https://www.google.com/maps?q=Cancun,Mexico&output=embed"
    ),

    new Vacation(
        "Honolulu",
        "Beach",
        "A tropical Hawaiian city known for beautiful beaches, warm weather, and island scenery.",
        "Relax at Waikiki Beach, hike Diamond Head, visit Pearl Harbor, and explore downtown Honolulu.",
        "images/honolulu.jpg",
        "https://www.google.com/maps?q=Honolulu,Hawaii&output=embed"
    )
];

const gallery = document.getElementById("vacation-gallery");

vacations.forEach((vacation) => {
    gallery.append(vacation.getCard());
});

document.getElementById("close-modal").onclick = () => {
    document.getElementById("vacation-modal").style.display = "none";
};

window.onclick = (event) => {
    const modal = document.getElementById("vacation-modal");

    if(event.target === modal) {
        modal.style.display = "none";
    }
};