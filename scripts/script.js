const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");
const cartCardContainer = document.getElementById("cartCard-container");
const totalAmount = document.getElementById("total-amount");
const modelContainer = document.getElementById("modal-container");
const liForClick = document.getElementById("category-model");

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
  showLoading();
};

const loadAllCards = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => showCardCategories(data));
  showLoading();
};

const showCardCategories = (data) => {
  cardContainer.innerHTML = "";
  data.plants.forEach((item) => {
    cardContainer.innerHTML += `
          <div id="${item.id}" class="bg-white p-4 rounded-md shadow-lg">
              <div>
                <img src="${item.image}" alt="" class="h-60 w-full object-cover rounded-md"/>
              </div>

              <div class="space-y-3 mt-3">
                <h2 class="text-lg font-bold title cursor-pointer">${item.name}</h2>
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

let cartArr = [];

cardContainer.addEventListener("click", (e) => {
  if (e.target.innerText === "Add to Cart") {
    findCardInfo(e);
  }

  if (e.target.classList.contains("title")) {
    loadModals(e);
  }
});

const findCardInfo = (e) => {
  const title = e.target.parentNode.children[0].innerText;
  const price = parseInt(
    e.target.parentNode.children[2].children[1].innerText.slice(1)
  );
  const id = e.target.parentNode.parentNode.id;

  cartArr.push({
    title: title,
    price: price,
    id: id,
  });

  showCartCards(cartArr);
};

const showCartCards = (arr) => {
  cartCardContainer.innerHTML = "";
  let total = 0;

  arr.forEach((item) => {
    cartCardContainer.innerHTML += `
            <div
                class="bg-[#DCFCE7] flex justify-between items-center p-3 rounded-lg"
              >
                <div>
                  <h3 class="text-sm font-semibold">${item.title}</h3>
                  <p class="text-gray-500">৳<span>${item.price}</span> × 1</p>
                </div>

                <div>
                  <i onclick=deleteCart('${item.id}') class="fa-solid fa-xmark text-gray-500 cursor-pointer"></i>
                </div>
              </div>
      `;

    total += Number(item.price);
  });
  totalAmount.innerText = total;
};

const deleteCart = (id) => {
  const filterDelete = cartArr.filter((item) => item.id !== id);
  cartArr = filterDelete;
  showCartCards(cartArr);
};

loadModals = (e) => {
  const id = e.target.parentNode.parentNode.id;
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      showModel(data.plants);
    });
};

const showModel = (data) => {
  modelContainer.innerHTML = `

            <h2 class="text-3xl font-bold">${data.name}</h2>

            <div>
              <img
                src=${data.image}
                alt=""
                class="h-48 w-full object-cover rounded-md"
              />
            </div>

            <p><span class="font-bold">Category</span> : ${data.category}</p>

            <p><span class="font-bold">price</span> : ${data.price}</p>

            <p>
              <span class="font-bold">Description: </span>
                ${data.description}
            </p>

         `;

  liForClick.showModal();
};

const showLoading = () => {
  cardContainer.innerHTML = `
         <div class="col-span-8 flex items-center justify-center min-h-[300px]">
            <span class="loading loading-spinner loading-xl"></span>
        </div>
    `;
};

//loadAllCards();
loadCategories();
