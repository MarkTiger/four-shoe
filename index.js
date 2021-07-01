const stockDB = [{
    id: 11,
    nama: 'Zion 1 PF',
    price: 1799000,
    image: 'sepatu11.jpg',
    stock: 6
}, {
    id: 12,
    nama: 'Nike Blazer Low 77 PRM',
    price: 1429000,
    image: 'sepatu12.jpg',
    stock: 5
}, {
    id: 13,
    nama: 'Nike Waffle Trainer 2',
    price: 1429000,
    image: 'sepatu13.jpg',
    stock: 3
}, {
    id: 14,
    nama: 'Nike Air Max 96 II',
    price: 2729000,
    image: 'sepatu14.jpg',
    stock: 8
}, {
    id: 15,
    nama: 'Nike Air Max 96 2 SE',
    price: 2569000,
    image: 'sepatu15.jpg',
    stock: 15
}, {
    id: 16,
    nama: 'Air Jordan 1 Mid SE',
    price: 1799000,
    image: 'sepatu16.jpg',
    stock: 8
}, {
    id: 17,
    nama: 'Air Jordan 1 Mid',
    price: 1649000,
    image: 'sepatu17.jpg',
    stock: 9
}, {
    id: 18,
    nama: 'Nike Waffle Trainer 2 S.D.',
    price: 1429000,
    image: 'sepatu18.jpg',
    stock: 21
}, {
    id: 19,
    nama: 'Nike Retro GTS',
    price: 799000,
    image: 'sepatu19.jpg',
    stock: 8
}, {
    id: 20,
    nama: 'Nike SB BLZR Court',
    price: 799000,
    image: 'sepatu20.jpg',
    stock: 16
}]

function addToChart(stockDB, ide) {
    let chart = {
        total: 0,
        list: []
    }

    for (let item of stockDB) {
        if (item.id === ide) {
            chart.total += item.price;
            chart.list.push(item);
        }
    }

    return chart;
}

let ide = 11;
let chart = addToChart(stockDB, ide)

console.log(chart);


let button11 = document.getElementById("11");


button11.addEventListener('click', addToChart(stockDB, 11));