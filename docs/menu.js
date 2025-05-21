const coffeeMenu = [
  {
    name: "Ice Americano",
    price: "Rp 10.000",
    description: "Espresso premium dengan air dingin, disajikan dingin untuk rasa kopi yang segar dan ringan",
    image: "/images/Ice Americano.png"
  },
  {
    name: "Latte",
    price: "Rp 10.000",
    description: "Espresso premium dengan air dingin, disajikan dingin untuk rasa kopi yang segar dan ringan",
    image: "/images/Hot Latte.png"
  },
  {
    name: "V60",
    price: "Rp 25.000",
    description: "Kopi manual brew dengan rasa bersih dan aroma khas, diseduh perlahan untuk kenikmatan maksimal",
    image: "/images/V60.png"
  },
  {
    name: "Vietnam Drip",
    price: "Rp 18.000",
    description: "Kopi khas dengan cita rasa kuat dan manis, disajikan perlahan dengan susu kental manis",
    image: "/images/Vietnam Drip.png"
  }
];

const dessertsMenu = [
  {
    name: "Croissant",
    price: "Rp 20.000",
    description: "Croissant renyah berlapis-lapis dengan aroma mentega yang harum, sempurna untuk teman kopi",
    image: "/images/Croissant.png"
  },
  {
    name: "Cheese Cake",
    price: "Rp 28.000",
    description: "Cheese Cake lembut dengan rasa manis gurih yang menggoda, cocok untuk pencuci mulut yang istimewa",
    image: "/images/Cheese Cake.png"
  },
  {
    name: "Chips",
    price: "Rp 8.000",
    description: "Kentang goreng renyah dengan taburan bumbu pilihan, sempurna untuk camilan kapan saja",
    image: "/images/Chips.png"
  },
  {
    name: "Sandwich",
    price: "Rp 22.000",
    description: "Sandwich dengan isian segar dan roti lembut, cocok untuk santapan cepat dan lezat",
    image: "/images/Sandwich.png"
  }
];

const menuContainer = document.getElementById("menuContainer");
const coffeeBtn = document.getElementById("coffeeBtn");
const dessertsBtn = document.getElementById("dessertsBtn");

function renderMenu(menu) {
  menuContainer.innerHTML = ""; // Kosongkan dulu

  menu.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className = "flex items-start space-x-4";

    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded" />
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <h3 class="font-semibold text-lg">${item.name}</h3>
          <span class="font-bold text-lg">${item.price}</span>
        </div>
        <p class="text-sm text-gray-600 mt-1">${item.description}</p>
      </div>
    `;

    menuContainer.appendChild(menuItem);
  });
}

// Event listeners
coffeeBtn.addEventListener("click", () => {
  coffeeBtn.classList.add("border-b-2", "border-black");
  coffeeBtn.classList.remove("opacity-50");
  dessertsBtn.classList.remove("border-b-2", "border-black");
  dessertsBtn.classList.add("opacity-50");
  renderMenu(coffeeMenu);
});

dessertsBtn.addEventListener("click", () => {
  dessertsBtn.classList.add("border-b-2", "border-black");
  dessertsBtn.classList.remove("opacity-50");
  coffeeBtn.classList.remove("border-b-2", "border-black");
  coffeeBtn.classList.add("opacity-50");
  renderMenu(dessertsMenu);
});

// Default: tampilkan coffee
renderMenu(coffeeMenu);
