const cars = [
    {
        name: 'Benz',
        image: 'statics/cars/ml3502014.jpg',
        link: 'https://www.instagram.com/p/DFaW1_Qx63B',
        description: 'Sparkling ✨ Foreign used 2014 Mercedes Benz ML350',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/2016es350.jpg',
        link: 'https://www.instagram.com/p/DE1zViQtBD-',
        description: 'Sparkling ✨ Foreign used 2016 ES350 Lexus',
    },
    {
        name: 'Benz',
        image: 'statics/cars/C3002015.jpg',
        link: 'https://www.instagram.com/p/DFZvC__NRiT',
        description: 'Sparkling ✨ Foreign used 2015 Mercedes Benz C300',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/2014avalon.jpg',
        link: 'https://www.instagram.com/p/DFLKMLINGk7',
        description: 'Sparkling ✨ Toks standard 2014 Toyota Avalon 16.5m',
    },
    {
        name: 'Benz',
        image: 'statics/cars/ml3502012.jpg',
        link: 'https://www.instagram.com/p/DFTI5pnNiHn',
        description: 'Sparkling ✨ Foreign used 2012 ML350 Mercedes Benz',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/2013rx350.jpg',
        link: 'https://www.instagram.com/p/DFOGNGwN9J8',
        description: 'Sparkling ✨ Foreign used 2013 RX350 Lexus',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/2014avalon.jpg',
        link: 'https://www.instagram.com/p/DFLKMLINGk7',
        description: 'Sparkling ✨ Toks standard 2014 Toyota Avalon 16.5m',
    },
    {
        name: 'Benz',
        image: 'statics/cars/2016glc300.jpg',
        link: 'https://www.instagram.com/p/DE1y2KztGBj',
        description: 'Sparkling ✨ Foreign used 2016 GLC300 Mercedes Benz',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/2012corolla.jpg',
        link: 'https://www.instagram.com/p/DFIN3j5t7Pe',
        description: 'Sparkling ✨ Foreign used 2012 Toyota Corolla',
    },
    {
        name: 'Hyundai',
        image: 'statics/cars/2015hyundai.jpg',
        link: 'https://www.instagram.com/p/DFDRXJctC9x',
        description: 'Sparkling ✨ Foreign used 2015 Hyundai Sonata',
    },
];

let currentIndex = 0;
const container = document.querySelector('.grid');
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function updateHero() {
  const hero = document.getElementById("hero");
  const carName = document.getElementById("car-name");
  const carDescription = document.getElementById("car-description");

  hero.style.backgroundImage = `url('${cars[currentIndex].image}')`;
  carName.textContent = cars[currentIndex].name;
  carDescription.textContent = cars[currentIndex].description;

  currentIndex = (currentIndex + 1) % cars.length;
}

function loadCars(){
    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card', 'bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'relative');
        
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('w-full', 'h-120', 'bg-cover', 'bg-center');
        imageDiv.style.backgroundImage = `url('${car.image}')`;
    
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('p-2', 'bg-gray-800', 'bg-opacity-90');
    
        const description = document.createElement('p');
        description.classList.add('text-white', 'mt-4');
        description.textContent = car.description;
    
        descriptionDiv.appendChild(description);
        card.appendChild(imageDiv);
        card.appendChild(descriptionDiv);
    
        const link = document.createElement('a');
        link.href = car.link;
        link.classList.add('block');
    
        link.appendChild(card);
        container.appendChild(link);
    });
}

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

if (window.location.pathname.includes("cars")) {
    loadCars();
} else {
    setInterval(updateHero, 3000);
}

