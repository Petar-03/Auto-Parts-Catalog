const products = [
  // BMW
  {
    id: 1,
    title: "BMW Запалителни свещи",
    brand: "bmw",
    price: 19.99,
    rating: 4.5,
    image: "img/bmwParts/bmw-sweshti.jpg",
    description:
      "Комплект запалителни свещи, подходящ за BMW модели. Осигурява надеждно запалване, стабилна работа на двигателя и оптимална ефективност при ежедневна употреба.",
  },
  {
    id: 2,
    title: "BMW Спирачни накладки",
    brand: "bmw",
    price: 26.93,
    rating: 5,
    image: "img/bmwParts/bmw-nakladki.jpg",
    description:
      "Комплект спирачни накладки за BMW автомобили. Осигуряват надеждно спиране, добра устойчивост при натоварване и комфортно шофиране при ежедневна употреба.",
  },
  {
    id: 3,
    title: "BMW Спирачни дискове",
    brand: "bmw",
    price: 42.93,
    rating: 4.6,
    image: "img/bmwParts/bmw-diskowe.jpg",
    description:
      "Комплект спирачни дискове за BMW автомобили. Осигуряват стабилно и ефективно спиране, висока устойчивост при натоварване и надеждна работа при различни условия на шофиране.",
  },
  {
    id: 4,
    title: "BMW Амортисьори",
    brand: "bmw",
    price: 261.83,
    rating: 4.8,
    image: "img/bmwParts/bmw-amortisiori.jpg",
    description:
      "Комплект амортисьори за BMW автомобили. Осигуряват по-добра стабилност, комфортно возене и надеждно поведение на автомобила при различни пътни условия.",
  },

  // Mercedes
  {
    id: 5,
    title: "Mercedes Запалителни свещи",
    brand: "mercedes",
    price: 21,
    rating: 4.3,
    image: "img/mercedesParts/mercedes-sweshti.jpg",
    description:
      "Комплект запалителни свещи за Mercedes. Осигурява надеждно запалване, стабилна работа на двигателя и оптимална ефективност при ежедневна употреба. Дълъг живот.",
  },
  {
    id: 6,
    title: "Mercedes Спирачни накладки",
    brand: "mercedes",
    price: 94.99,
    rating: 4,
    image: "img/mercedesParts/mercedes-nakladki.jpg",
    description:
      "Комплект спирачни накладки за Mercedes автомобили. Осигуряват надеждно спиране, добра устойчивост при натоварване и комфортно шофиране при ежедневна употреба.",
  },
  {
    id: 7,
    title: "Mercedes Спирачни дискове",
    brand: "mercedes",
    price: 49.57,
    rating: 3.5,
    image: "img/mercedesParts/mercedes-diskowe.jpg",
    description:
      "Комплект спирачни дискове за Mercedes автомобили. Осигуряват стабилно и ефективно спиране, висока устойчивост при натоварване и надеждна работа при различни условия на шофиране.",
  },
  {
    id: 8,
    title: "Mercedes амортисьори ",
    brand: "mercedes",
    price: 19.99,
    rating: 4.6,
    image: "img/mercedesParts/mercedes-amortisiori.jpg",
    description:
      "Комплект амортисьори за Mercedes автомобили. Осигуряват по-добра стабилност, комфортно возене и надеждно поведение на автомобила при различни пътни условия.",
  },

  // Audi
  {
    id: 9,
    title: "Audi Запалителни свещи",
    brand: "audi",
    price: 30.99,
    rating: 4.7,
    image: "img/audiParts/audi-sweshti.jpg",
    description:
      "Комплект запалителни свещи за Audi автомобили. Осигурява надеждно запалване, стабилна работа на двигателя и оптимална ефективност при ежедневна употреба. Дълъг живот.",
  },
  {
    id: 10,
    title: "Audi Спирачни накладки",
    brand: "audi",
    price: 40.9,
    rating: 5,
    image: "img/audiParts/audi-nakladki.jpg",
    description:
      "Комплект спирачни накладки за Audi автомобили. Осигуряват надеждно спиране, добра устойчивост при натоварване и комфортно шофиране при ежедневна употреба.",
  },
  {
    id: 11,
    title: "Audi Спирачни дискове",
    brand: "audi",
    price: 52.7,
    rating: 4,
    image: "img/audiParts/audi-diskowe.jpg",
    description:
      "Комплект спирачни дискове за Auidi автомобили. Осигуряват стабилно и ефективно спиране, висока устойчивост при натоварване и надеждна работа при различни условия на шофиране.",
  },
  {
    id: 12,
    title: "Audi Амортисьори",
    brand: "audi",
    price: 328.8,
    rating: 4.3,
    image: "img/audiParts/audi-amortisiori.jpg",
    description:
      "Комплект спортни амортисьори за Audi автомобили. Осигуряват по-добра стабилност, комфортно возене и надеждно поведение на автомобила при различни пътни условия.",
  },

  // Subaru
  {
    id: 13,
    title: "Subaru Запалителни свещи",
    brand: "subaru",
    price: 23.99,
    rating: 4.8,
    image: "img/subaruParts/subaru-sweshti.jpg",
    description:
      "Комплект запалителни свещи, подходящи за Subaru модели. Осигурява надеждно запалване, стабилна работа на двигателя и оптимална ефективност при ежедневна употреба. Дълъг живот.",
  },
  {
    id: 14,
    title: "Subaru Спирачни накладки",
    brand: "subaru",
    price: 30.5,
    rating: 4.7,
    image: "img/subaruParts/subaru-nakladki.jpg",
    description:
      "Комплект спирачни накладки за Subaru автомобили. Осигуряват надеждно спиране, добра устойчивост при натоварване и комфортно шофиране при ежедневна употреба.",
  },
  {
    id: 15,
    title: "Subaru Спирачни дискове",
    brand: "subaru",
    price: 129.99,
    rating: 3.3,
    image: "img/subaruParts/subaru-diskowe.jpg",
    description:
      "Комплект спирачни дискове за надеждно спиране и контрол Subaru. Осигуряват стабилно и ефективно спиране, висока устойчивост при натоварване и надеждна работа при различни условия на шофиране.",
  },
  {
    id: 16,
    title: "Subaru Амортисьори",
    brand: "subaru",
    price: 250,
    rating: 4.8,
    image: "img/subaruParts/subaru-amortisiori.jpg",
    description:
      "Комплект спортно окачване за Subaru. Осигуряват по-добра стабилност, комфортно возене и надеждно поведение на автомобила при различни пътни условия.",
  },

  //Toyota
  {
    id: 17,
    title: "Toyota Запалителни свещи",
    brand: "toyota",
    price: 21.99,
    rating: 4.9,
    image: "img/toyotaParts/toyota-sweshti.jpg",
    description:
      "Комплект запалителни свещи за Toyota автомобили. Осигурява надеждно запалване, стабилна работа на двигателя и оптимална ефективност при ежедневна употреба. Дълъг живот.",
  },
  {
    id: 18,
    title: "Toyota Спирачни накладки",
    brand: "toyota",
    price: 32.7,
    rating: 4.5,
    image: "img/toyotaParts/toyota-nakladki.jpg",
    description:
      "Комплект Toyota накладки за моментално спиране. Осигуряват надеждно спиране, добра устойчивост при натоварване и комфортно шофиране при ежедневна употреба.",
  },
  {
    id: 19,
    title: "Toyota Спирачни дискове",
    brand: "toyota",
    price: 27.5,
    rating: 4.4,
    image: "img/toyotaParts/toyota-diskowe.jpg",
    description:
      "Комплект спирачни дискове за Toyota модели. Осигуряват стабилно и ефективно спиране, висока устойчивост при натоварване и надеждна работа при различни условия на шофиране.",
  },
  {
    id: 20,
    title: "Toyota Амортисьори",
    brand: "toyota",
    price: 200,
    rating: 4.6,
    image: "img/toyotaParts/toyota-amortisiori.jpg",
    description:
      "Комплект надеждени амортисьори за Toyota автомобили. Осигуряват по-добра стабилност, комфортно возене и надеждно поведение на автомобила при различни пътни условия.",
  },
];

//Display products on the page
const productsGrid = document.querySelector(".products-grid");

function renderProducts(productsToShow) {
  productsGrid.innerHTML = "";

  productsToShow.forEach(function (product) {
    const productCard = document.createElement("article");
    productCard.classList.add("product-card");
    productsGrid.appendChild(productCard);

    const imageBox = document.createElement("div");
    imageBox.classList.add("product-image-box");
    productCard.appendChild(imageBox);

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;
    productImage.classList.add("product-img");

    imageBox.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    const productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;
    productInfo.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price + " EUR";
    productInfo.appendChild(productPrice);

    const productRating = document.createElement("div");
    productRating.classList.add("product-rating");
    productInfo.appendChild(productRating);

    const stars = createRatingStars(product.rating);
    const ratingNumber = document.createElement("span");
    ratingNumber.classList.add("rating-number");
    ratingNumber.textContent = `(${product.rating})`;
    productRating.appendChild(stars);
    productRating.appendChild(ratingNumber);

    const productActions = document.createElement("div");
    productActions.classList.add("product-actions");
    productInfo.appendChild(productActions);

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("details-btn");
    detailsButton.setAttribute("product-id", product.id);
    detailsButton.textContent = "Детайли";
    productActions.appendChild(detailsButton);

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-btn");
    favoriteButton.setAttribute("product-id", product.id);
    favoriteButton.setAttribute("aria-label", "Добави в любими");
    productActions.appendChild(favoriteButton);

    const favoriteIcon = document.createElement("i");
    favoriteIcon.classList.add("bi");
    favoriteIcon.classList.add("bi-heart");
    favoriteButton.appendChild(favoriteIcon);
  });
}
renderProducts(products);

//Stars count on each product
function createRatingStars(rating) {
  const ratingStars = document.createElement("div");
  ratingStars.classList.add("stars");

  if (rating >= 5) {
    ratingStars.innerHTML = `
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
    `;
  } else if (rating > 4 && rating < 5) {
    ratingStars.innerHTML = `
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-half"></i>
    `;
  } else if (rating === 4) {
    ratingStars.innerHTML = `
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star"></i>
    `;
  } else if (rating > 3 && rating < 4) {
    ratingStars.innerHTML = `
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-half"></i>
      <i class="bi bi-star"></i>
    `;
  } else if (rating === 3) {
    ratingStars.innerHTML = `
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star"></i>
      <i class="bi bi-star"></i>
    `;
  }

  return ratingStars;
}

/*Filtering products - One button: 4 products, All button: 20products*/
const allButton = document.querySelector(".all-btn");
const bmwButton = document.querySelector(".bmw-btn");
const mercedesButton = document.querySelector(".mercedes-btn");
const audiButton = document.querySelector(".audi-btn");
const subaruButton = document.querySelector(".subaru-btn");
const toyotaButton = document.querySelector(".toyota-btn");

function removeActiveClass() {
  allButton.classList.remove("active");
  bmwButton.classList.remove("active");
  mercedesButton.classList.remove("active");
  audiButton.classList.remove("active");
  subaruButton.classList.remove("active");
  toyotaButton.classList.remove("active");
}

allButton.addEventListener("click", function () {
  removeActiveClass();
  allButton.classList.add("active");

  renderProducts(products);
});

bmwButton.addEventListener("click", function () {
  removeActiveClass();
  bmwButton.classList.add("active");

  const bmwProducts = [];

  products.forEach(function (product) {
    if (product.brand === "bmw") {
      bmwProducts.push(product);
    }
  });

  renderProducts(bmwProducts);
});

mercedesButton.addEventListener("click", function () {
  removeActiveClass();
  mercedesButton.classList.add("active");

  const mercedesProducts = [];

  products.forEach(function (product) {
    if (product.brand === "mercedes") {
      mercedesProducts.push(product);
    }
  });

  renderProducts(mercedesProducts);
});

audiButton.addEventListener("click", function () {
  removeActiveClass();
  audiButton.classList.add("active");

  const audiProducts = [];

  products.forEach(function (product) {
    if (product.brand === "audi") {
      audiProducts.push(product);
    }
  });

  renderProducts(audiProducts);
});

subaruButton.addEventListener("click", function () {
  removeActiveClass();
  subaruButton.classList.add("active");

  const subaruProducts = [];

  products.forEach(function (product) {
    if (product.brand === "subaru") {
      subaruProducts.push(product);
    }
  });

  renderProducts(subaruProducts);
});

toyotaButton.addEventListener("click", function () {
  removeActiveClass();
  toyotaButton.classList.add("active");

  const toyotaProducts = [];

  products.forEach(function (product) {
    if (product.brand === "toyota") {
      toyotaProducts.push(product);
    }
  });

  renderProducts(toyotaProducts);
});

//Products modal
const productModal = document.querySelector("#productModal");
const modalCloseBtn = document.querySelector("#modalCloseBtn");

const modalProductImage = document.querySelector("#modalProductImage");
const modalProductTitle = document.querySelector("#modalProductTitle");
const modalProductPrice = document.querySelector("#modalProductPrice");
const modalProductStars = document.querySelector("#modalProductStars");
const modalProductRating = document.querySelector("#modalProductRating");
const modalProductDescription = document.querySelector(
  "#modalProductDescription"
);
const modalProductBrand = document.querySelector("#modalProductBrand");

productsGrid.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("details-btn")) {
    const clickedProductId = clickedElement.getAttribute("product-id");

    let selectedProduct = null;

    products.forEach(function (product) {
      if (product.id == clickedProductId) {
        selectedProduct = product;
      }
    });

    if (selectedProduct !== null) {
      modalProductImage.src = selectedProduct.image;
      modalProductImage.alt = selectedProduct.title;

      modalProductTitle.textContent = selectedProduct.title;
      modalProductPrice.textContent = selectedProduct.price + " EUR";

      modalProductStars.innerHTML = "";
      const modalStars = createRatingStars(selectedProduct.rating);
      modalProductStars.appendChild(modalStars);

      modalProductRating.textContent = `(${selectedProduct.rating})`;
      modalProductDescription.textContent = selectedProduct.description;
      modalProductBrand.textContent = selectedProduct.brand.toUpperCase();

      productModal.classList.add("show");
    }
  }
});

modalCloseBtn.addEventListener("click", function () {
  productModal.classList.remove("show");
});
