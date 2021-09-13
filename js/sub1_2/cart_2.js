let carts2 = document.querySelectorAll(".sub_1_2Addcart");

let products = [
  {
    name: "금호선인장(M)",
    tag: "cactus_1",
    price: 10,
    inCart: 0,
  },
  {
    name: "미르틸로-용신목(M)",
    tag: "cactus_2",
    price: 15,
    inCart: 0,
  },
  {
    name: "유포르비아(M)",
    tag: "cactus_3",
    price: 30,
    inCart: 0,
  },
  {
    name: "토끼귀 선인장(M)",
    tag: "cactus_4",
    price: 15,
    inCart: 0,
  },
  {
    name: "알로에베라(L)",
    tag: "cactus_5",
    price: 45,
    inCart: 0,
  },
  {
    name: "코랄 선인장(S)",
    tag: "cactus_6",
    price: 35,
    inCart: 0,
  },
  {
    name: "레이디핑거(M)",
    tag: "cactus_7",
    price: 8,
    inCart: 0,
  },
  {
    name: "크리스마스-게발(M)",
    tag: "cactus_8",
    price: 10,
    inCart: 0,
  },
  {
    name: "유포르비아(S)",
    tag: "cactus_9",
    price: 15,
    inCart: 0,
  },
  {
    name: "금호선인장(S)",
    tag: "cactus_10",
    price: 6,
    inCart: 0,
  },
  {
    name: "알로에베라(S)",
    tag: "cactus_11",
    price: 6,
    inCart: 0,
  },
  {
    name: "선인장 세트(L)",
    tag: "cactus_12",
    price: 55,
    inCart: 0,
  },
];
// consol.log('carts');
for (let i = 0; i < carts2.length; i++) {
  carts2[i].addEventListener("click", () => {
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
