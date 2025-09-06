const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data.categories));
};

const showCategories = (data) => {
  categoryContainer.innerHTML = "";
  data.forEach((item) => {
    categoryContainer.innerHTML += `
              <h2 id="${item.id}"
                class="hover:bg-[#15803D] hover:p-2 cursor-pointer rounded-sm hover:text-white transition-all duration-200"
              >
                ${item.category_name}
              </h2>
    `;
  });
};

categoryContainer.addEventListener("click", (e) => {
  const ele = categoryContainer.querySelectorAll("h2");
  ele.forEach((item) => item.classList.remove("styled-btn"));

  if (e.target.tagName === "H2") {
    e.target.classList.add("styled-btn");

    loadCardCategories(e.target.id);
  }
});

const loadCardCategories = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => showCardCategories(data))
    .catch((err) => console.log(err));
};

const loadAllCards = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => showCardCategories(data));
};

const showCardCategories = (data) => {
  cardContainer.innerHTML = "";
  data.plants.forEach((item) => {
    cardContainer.innerHTML += `
          <div class="bg-white p-4">
              <div>
                <img src="${item.image}" alt="" class="h-48 w-full object-cover rounded-md"/>
              </div>

              <div class="space-y-3 mt-3">
                <h2 class="text-lg font-bold">${item.name}</h2>
                <p class="text-gray-500">
                   ${item.description}
                </p>

                <div class="flex justify-between items-center">
                  <p class="text-sm bg-[#DCFCE7] p-2 rounded-full">
                    ${item.category}
                  </p>
                  <p class="text-sm">৳${item.price}</p>
                </div>

                <button
                  class="btn w-full rounded-full bg-[#15803D] text-white py-5"
                >
                 Add to Cart
                </button>
              </div>
            </div>
      
      `;
  });
};
loadAllCards();
loadCategories();
