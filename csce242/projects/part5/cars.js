const getCars = async () => {
    const response = await fetch("https://dannycruzga.github.io/dannycruzgal.github.io/csce242/projects/part5/cars.json");
    const cars = await response.json();

    const carList = document.getElementById("car-list");

    cars.forEach(car => {
        carList.innerHTML += `
        <div class="car-card">
            <img src="../${car.img_name}" alt="${car.model}">
            <h3>${car.brand} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
            <p>Type: ${car.type}</p>
        </div>
    `;
    });
};

getCars();