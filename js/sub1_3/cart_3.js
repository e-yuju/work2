let carts3 = document.querySelectorAll(".sub_1_3Addcart");

let products = [
  {
    name: "모닝뷰티",
    tag: "succulent_1",
    price: 10,
    inCart: 0,
  },
  {
    name: "스타라이트",
    tag: "succulent_2",
    price: 5,
    inCart: 0,
  },
  {
    name: "블루아톨",
    tag: "succulent_3",
    price: 8,
    inCart: 0,
  },
  {
    name: "뉘른베르크",
    tag: "succulent_4",
    price: 10,
    inCart: 0,
  },
  {
    name: "드래곤 블러드",
    tag: "succulent_5",
    price: 5,
    inCart: 0,
  },
  {
    name: "크라슐라 모르건",
    tag: "succulent_6",
    price: 8,
    inCart: 0,
  },
  {
    name: "칼랑코에 초코",
    tag: "succulent_7",
    price: 10,
    inCart: 0,
  },
  {
    name: "셈페르비붐 레드라이언",
    tag: "succulent_8",
    price: 10,
    inCart: 0,
  },
  {
    name: "녹영 콩란",
    tag: "succulent_9",
    price: 7,
    inCart: 0,
  },
  {
    name: "블랙로즈",
    tag: "succulent_10",
    price: 10,
    inCart: 0,
  },
  {
    name: "크라슐라 헤레이",
    tag: "succulent_11",
    price: 6,
    inCart: 0,
  },
  {
    name: "선 버스트",
    tag: "succulent_12",
    price: 5,
    inCart: 0,
  },
];
// consol.log('carts');
for (let i = 0; i < carts3.length; i++) {
  carts3[i].addEventListener("click", () => {
    // console.log('added to cart');
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".login span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  // console.log('The product clicked is', product);
  let productNumbers = localStorage.getItem("cartNumbers");
  //  console.log(productNumbers);
  //  console.log(typeof productNumbers);
  productNumbers = parseInt(productNumbers);
  //   console.log(typeof productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".login span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".login span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  // console.log('My cartItems are', cartItems);
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  // console.log('The product price is', product.price);
  let cartCost = localStorage.getItem("totalCost");
  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let products = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && products) {
    console.log(cartItems);
    products.innerHTML = "";
    Object.values(cartItems).map((item) => {
      products.innerHTML += `
            <div class="product">
              <div class="product_bottom">
                  <ion-icon name="close-circle-outline"></ion-icon>
                  <img src="./img1/${item.tag}.jpg">
              </div>
              <div class="product_name">
                <span>${item.name}</span>
              </div>
              <div class="product_bottom_right">
                <div class="price_in">￦${item.price},000
                </div>
                <div class="quantity_in">
                  <ion-icon name="chevron-back-circle-outline"></ion-icon>
                  <span>${item.inCart}</span>
                  <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                </div>
                <div class="total_in">
                  ￦${item.inCart * item.price},000
                </div>
              </div>
            </div>              
            `;
    });
    products.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          basket total
        </h4>
        <h4 class="basketTotal">
          ￦${cartCost},000
        </h4>
      </div>
    `;
  }
}
onLoadCartNumbers();
displayCart();
