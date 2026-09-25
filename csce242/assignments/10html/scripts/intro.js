const parks = {
    "Disney World": "https://maps.google.com/maps?q=Disney+World+Florida&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "Universal Studios": "https://www.google.com/maps?q=Universal+Studios+Florida&output=embed",
    "Carowinds": "https://www.google.com/maps?q=Carowinds,NC&output=embed",
    "Busch Gardens": "https://www.google.com/maps?q=Busch+Gardens+Tampa,FL&output=embed"
};

const stadiums = {
    "Williams-Brice Stadium": "https://www.google.com/maps?q=Williams-Brice+Stadium,SC&output=embed",
    "Bank of America Stadium": "https://www.google.com/maps?q=Bank+of+America+Stadium,NC&output=embed",
    "Mercedes-Benz Stadium": "https://www.google.com/maps?q=Mercedes-Benz+Stadium,GA&output=embed",
    "Hard Rock Stadium": "https://www.google.com/maps?q=Hard+Rock+Stadium,FL&output=embed"
};

const select = document.getElementById("destination-type");
const links = document.getElementById("destination-links");
const map = document.getElementById("map");

map.classList.add("hidden");

select.onchange = () => {
    links.innerHTML = "";
    map.classList.add("hidden");

    let destinations;

    if(select.value == "parks") {
        destinations = parks;
    } else if(select.value == "stadiums") {
        destinations = stadiums;
    } else {
        return;
    }

    for(let place in destinations) {
        let p = document.createElement("p");
        let a = document.createElement("a");

        a.innerHTML = place;
        a.href = "#";

        a.onclick = () => {
            map.src = destinations[place];
            map.classList.remove("hidden");
        };

        p.append(a);
        links.append(p);
    }
};