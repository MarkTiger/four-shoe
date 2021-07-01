const stockDB = [
  {
    id: 01,
    nama: "Adidas x Bait EQT",
    price: 6499,
    image: "sepatu01.jpg",
    stock: 9
  },
  {
    id: 02,
    nama: "Adidas Yeezy Boost 350 V2 Carbon",
    price: 5650,
    image: "sepatu02.jpg",
    stock: 15
  },
  {
    id: 03,
    nama: "Adidas Human Race NMD Pharrell Oreo",
    price: 5650,
    image: "sepatu03.jpg",
    stock: 10
  },
  {
    id: 04,
    nama: "Adidas Ultraboost SUMMER.RDY Tokyo Shoes",
    price: 3120,
    image: "sepatu04.jpg",
    stock: 13
  },
  {
    id: 05,
    nama: "Adidas Ultraboost 5.0 DNA Shoes",
    price: 3500,
    image: "sepatu05.jpg",
    stock: 20
  },
  {
    id: 06,
    nama: "Adidas Climacool Vento Shoes",
    price: 2250,
    image: "sepatu06.jpg",
    stock: 16
  },
  {
    id: 07,
    nama: "Adidas Nizza Trefoil Shoes",
    price: 2250,
    image: "sepatu07.jpg",
    stock: 21
  },
  {
    id: 08,
    nama: "Adidas Superstar Shoes",
    price: 1250,
    image: "sepatu08.jpg",
    stock: 12
  },
  {
    id: 09,
    nama: "Adidas Busenitz Pro Shoes",
    price: 4000,
    image: "sepatu09.jpg",
    stock: 6
  },
  {
    id: 10,
    nama: "Adidas ZX 1K Boost Shoes",
    price: 2000,
    image: "sepatu10.jpg",
    stock: 10
  },
  {
    id: 11,
    nama: 'Zion 1 PF',
    price: 1799,
    image: 'sepatu11.jpg',
    stock: 6
  },
  {
    id: 12,
    nama: 'Nike Blazer Low 77 PRM',
    price: 1429,
    image: 'sepatu12.jpg',
    stock: 5
  }, 
  {
    id: 13,
    nama: 'Nike Waffle Trainer 2',
    price: 1429,
    image: 'sepatu13.jpg',
    stock: 3
  },
  {
    id: 14,
    nama: 'Nike Air Max 96 II',
    price: 2729,
    image: 'sepatu14.jpg',
    stock: 8
  },
  {
    id: 15,
    nama: 'Nike Air Max 96 2 SE',
    price: 2569,
    image: 'sepatu15.jpg',
    stock: 15
  },
  {
    id: 16,
    nama: 'Air Jordan 1 Mid SE',
    price: 1799,
    image: 'sepatu16.jpg',
    stock: 8
  },
  {
    id: 17,
    nama: 'Air Jordan 1 Mid',
    price: 1649,
    image: 'sepatu17.jpg',
    stock: 9
  },
  {
    id: 18,
    nama: 'Nike Waffle Trainer 2 S.D.',
    price: 1429,
    image: 'sepatu18.jpg',
    stock: 21
  },
  {
    id: 19,
    nama: 'Nike Retro GTS',
    price: 799,
    image: 'sepatu19.jpg',
    stock: 8
  },
  {
    id: 20,
    nama: 'Nike SB BLZR Court',
    price: 799,
    image: 'sepatu20.jpg',
    stock: 16
  }
]

let cartDB = [];

let shopItemContainer = document.querySelector("#container");

// Menampilkan barang dari database ke html
function main() {
  for (let i = 0; i < stockDB.length; i++) {
    let itemBox = document.createElement("div");
    let itemImageTitle = document.createElement("div");
    let itemPriceCart = document.createElement("div");
    let itemImage = document.createElement("img");
    let itemTitle = document.createElement("span");
    let itemPrice = document.createElement("span");
    let itemAddCart = document.createElement("button");

    itemBox.setAttribute("class", "item-box");
    itemImageTitle.setAttribute("class", "image-title");
    itemPriceCart.setAttribute("class", "price-cart");

    itemImage.setAttribute("src", `images/${stockDB[i].image}`);
    itemTitle.textContent = stockDB[i].nama;
    itemPrice.innerHTML = `<span style="color: #00195f;">Rp</span> ${stockDB[i].price} <span style="color: #00195f;">K</span>`;
    itemAddCart.setAttribute("id", stockDB[i].id);
    itemAddCart.setAttribute("class", "add-to-cart");
    itemAddCart.textContent = "Cart++";
    
    itemImageTitle.appendChild(itemImage);
    itemImageTitle.appendChild(itemTitle);
    itemPriceCart.appendChild(itemPrice);
    itemPriceCart.appendChild(itemAddCart);

    itemBox.appendChild(itemImageTitle);
    itemBox.appendChild(itemPriceCart);
    shopItemContainer.appendChild(itemBox);
  }
}

main();

// Fungsi menambahkan item ke cartDB sesuai tombol yang ditekan
function addToCart(e) {
  let id = e.currentTarget.getAttribute("id");
  let index = NaN;
  for (let i = 0; i < stockDB.length; i++) {
    let currentId = stockDB[i].id;
    if (currentId == id) {
      index = i;
      break;
    }
  }
  cartDB.push(stockDB[index]);
  refreshCartContainer();
  // checkCartDB();
}

// function checkCartDB() {
//   console.log(cartDB)
// }

// Add event listener ke semua tombol Cart++
let allAddToCart = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < allAddToCart.length; i++) {
  let addCartButton = allAddToCart[i];
  addCartButton.addEventListener("click", addToCart);
}

// Rebuild / refresh DOM cart-container
let cartItemContainer = document.querySelector("#cart-item-container");

function refreshCartContainer() {
  cartItemContainer.innerHTML = "";

  for (let i = 0; i < cartDB.length; i++) {
    let itemBox = document.createElement("div");
    let itemTitlePriceDelete = document.createElement("div");
    let itemPriceDelete = document.createElement("div");
    let itemImage = document.createElement("img");
    let itemTitle = document.createElement("span");
    let itemPrice = document.createElement("span");
    let itemDeleteBtn = document.createElement("button");
  
    itemBox.setAttribute("class", "item-box2");
    itemTitlePriceDelete.setAttribute("class", "title-price-delete");
    itemPriceDelete.setAttribute("class", "price-delete");
  

    itemImage.setAttribute("src", `images/${cartDB[i].image}`);
    itemTitle.textContent = cartDB[i].nama;
    itemPrice.innerHTML = `<span style="color: #a46bff;">Rp</span> ${cartDB[i].price} <span style="color: #a46bff;">K</span>`;
    itemDeleteBtn.setAttribute("id", `cart-${i}`);
    itemDeleteBtn.setAttribute("class", `delete-from-cart`);
    itemDeleteBtn.innerHTML = '<img src="https://img.icons8.com/color/48/000000/trash.png"/>';
    itemDeleteBtn.addEventListener("click", deleteFromCart);
    
    // itemImageTitle.appendChild(itemImage);
    // itemImageTitle.appendChild(itemTitle);
    // itemPriceDelete.appendChild(itemPrice);
    // itemPriceDelete.appendChild(itemDeleteBtn);
  
    // itemBox.appendChild(itemImage);
    // itemBox.appendChild(itemPriceDelete);
    itemPriceDelete.appendChild(itemPrice);
    itemPriceDelete.appendChild(itemDeleteBtn);

    itemTitlePriceDelete.appendChild(itemTitle)
    itemTitlePriceDelete.appendChild(itemPriceDelete)
    itemBox.appendChild(itemImage);
    itemBox.appendChild(itemTitlePriceDelete);

    cartItemContainer.appendChild(itemBox);
  }
  setTotalHarga_Counter();
}

function deleteFromCart(e) {
  let id = e.currentTarget.getAttribute("id");
  let index = id.slice(5);
  cartDB.splice(index, 1);
  refreshCartContainer();
}

// button open cart page
let cartPageElement = document.querySelector("#cart-page");

function openCartPage() {
  cartPageElement.style.zIndex = "100";
}

// button close cart page
function closeCart() {
  cartPageElement.style.zIndex = "-100";
}

// fungsi tombol buy;

let popupBox = document.querySelector("#popup-page")
let msgElement = document.querySelector("#msg");

function buyBtn() {
  cartPageElement.style.zIndex = "-100";

  if (cartDB.length === 0) {
    msgElement.textContent = "Pilih dulu sepatunya bossque!";
  } else {
    msgElement.textContent = "Pembelian Berhasil! Terima kasih";
  }

  popupBox.style.zIndex = "100";
  cartDB = [];
  
  setTimeout(()=>{
    popupBox.style.zIndex = "-100";
  }, 2000);
  refreshCartContainer();
}

// set totalHarga dan counter
function setTotalHarga_Counter() {
  let totalHargaElement = document.querySelector("#total-harga");
  let counterElement = document.querySelector("#counter");

  let totalHarga = 0
  for (let i = 0; i < cartDB.length; i++) {
    totalHarga += cartDB[i].price;
  }
  totalHargaElement.textContent = `Rp ${totalHarga} K`;
  counterElement.textContent = cartDB.length;
}
