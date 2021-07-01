
const stockDB = [
  {
    id: 01,
    nama: "Adidas x Bait EQT",
    price: 6499000,
    image: "sepatu01.jpg",
    stock: 9
  },
  {
    id: 02,
    nama: "Sneakers Adidas Yeezy Boost 350 V2 Carbon",
    price: 5650000,
    image: "sepatu02.jpg",
    stock: 15
  },
  {
    id: 03,
    nama: "Adidas Human Race NMD Pharrell Oreo",
    price: 5650000,
    image: "sepatu03.jpg",
    stock: 10
  },
  {
    id: 04,
    nama: "Adidas Ultraboost SUMMER.RDY Tokyo Shoes",
    price: 3120000,
    image: "sepatu04.jpg",
    stock: 13
  },
  {
    id: 05,
    nama: "Adidas Ultraboost 5.0 DNA Shoes",
    price: 3500000,
    image: "sepatu05.jpg",
    stock: 20
  },
  {
    id: 06,
    nama: "Adidas Climacool Vento Shoes",
    price: 2250000,
    image: "sepatu06.jpg",
    stock: 16
  },
  {
    id: 07,
    nama: "Adidas Nizza Trefoil Shoes",
    price: 2250000,
    image: "sepatu07.jpg",
    stock: 21
  },
  {
    id: 08,
    nama: "Adidas Superstar Shoes",
    price: 1250000,
    image: "sepatu08.jpg",
    stock: 12
  },
  {
    id: 09,
    nama: "Adidas Busenitz Pro Shoes",
    price: 4000000,
    image: "sepatu09.jpg",
    stock: 6
  },
  {
    id: 10,
    nama: "Adidas ZX 1K Boost Shoes",
    price: 2000000,
    image: "sepatu10.jpg",
    stock: 10
  },
  {
    id: 11,
    nama: 'Zion 1 PF',
    price: 1799000,
    image: 'sepatu11.jpg',
    stock: 6
  },
  {
    id: 12,
    nama: 'Nike Blazer Low 77 PRM',
    price: 1429000,
    image: 'sepatu12.jpg',
    stock: 5
  }, 
  {
    id: 13,
    nama: 'Nike Waffle Trainer 2',
    price: 1429000,
    image: 'sepatu13.jpg',
    stock: 3
  },
  {
    id: 14,
    nama: 'Nike Air Max 96 II',
    price: 2729000,
    image: 'sepatu14.jpg',
    stock: 8
  },
  {
    id: 15,
    nama: 'Nike Air Max 96 2 SE',
    price: 2569000,
    image: 'sepatu15.jpg',
    stock: 15
  },
  {
    id: 16,
    nama: 'Air Jordan 1 Mid SE',
    price: 1799000,
    image: 'sepatu16.jpg',
    stock: 8
  },
  {
    id: 17,
    nama: 'Air Jordan 1 Mid',
    price: 1649000,
    image: 'sepatu17.jpg',
    stock: 9
  },
  {
    id: 18,
    nama: 'Nike Waffle Trainer 2 S.D.',
    price: 1429000,
    image: 'sepatu18.jpg',
    stock: 21
  },
  {
    id: 19,
    nama: 'Nike Retro GTS',
    price: 799000,
    image: 'sepatu19.jpg',
    stock: 8
  },
  {
    id: 20,
    nama: 'Nike SB BLZR Court',
    price: 799000,
    image: 'sepatu20.jpg',
    stock: 16
  }
]

let shopItemContainer = document.querySelector("#shop-item-container");

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
  itemPrice.textContent = `Rp ${stockDB[i].price}`;
  itemAddCart.setAttribute("id", stockDB[i].id);
  itemAddCart.textContent = "Cart++";
  
  itemImageTitle.appendChild(itemImage);
  itemImageTitle.appendChild(itemTitle);
  itemPriceCart.appendChild(itemPrice);
  itemPriceCart.appendChild(itemAddCart);

  itemBox.appendChild(itemImageTitle);
  itemBox.appendChild(itemPriceCart);
  shopItemContainer.appendChild(itemBox);
}
