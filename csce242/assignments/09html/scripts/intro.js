const road = document.getElementById("road");

const makeCar = (color, left, top) => {
    const car = document.createElement("div");
    car.className = "car";
    car.style.backgroundColor = color;
    car.style.left = left + "px";
    car.style.top = top + "px";

    /* Window */
    const carWindow = document.createElement("div");
    carWindow.className = "window";

    /* Wheels */
    const wheel1 = document.createElement("div");
    wheel1.className = "wheel wheel1";
    const wheel2 = document.createElement("div");
    wheel2.className = "wheel wheel2";

    car.append(carWindow);
    car.append(wheel1);
    car.append(wheel2);

    road.append(car);
};

/* Loads in the cars on the road */
const loadCars = () => {
    const colors = ["red", "blue", "yellow", "orange"];

    for(let i = 0; i < 8; i++) {
        let left = Math.random() * 1200;
        let top;

        if(Math.random() < 0.5) {
            top = 20;
        } else {
            top = 90;
        }

        let color = colors[i % 4];

        makeCar(color, left, top);
    }
};

loadCars();