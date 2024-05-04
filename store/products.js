/*class Product {
  constructor(id, tittle, price, color, description, stock, images, onsale, supplier) {
    this.id = id;
    this.tittle = tittle;
    this.price = price;
    this.color = color;
    this.description = description;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newSupplier) {
    this._supplier = newSupplier;
  }

  sellUnits(units) {
    if (units > this.stock) {
        console.log("No hay suficiente estock")
    }
    else this.stock = this.stock - units;
  }
}

const prod1 = new Product("JF0001", "Walkman", 195, negro, aaa, 7, "Foto1.jpg", false, "Blackberry");
const prod2 = new Product("JF0002", "Celular", 1800, red, bbb, 15, "Foto2.jpg", false, "Xiaomi");
const prod3 = new Product("JF0003", "Tablet", 1200, orange, ccc, 5, "Foto3.jpg", true, "Samsung");
const prod4 = new Product("JF0004", "Laptop", 4500, 10, "Foto4.jpg", false, "Asus");
const prod5 = new Product("JF0005", "PC Gamer", 7200, 7, "Foto5.jpg", true, "Lenovo");
const prod6 = new Product("JF0006", "Monitor", 1400, 7, "Foto6.jpg", true, "Viewsonic");

const products = [prod1,prod2, prod3, prod4];

console.log(products);

console.log(products[1]);

console.log(products[products.length-1]);

products.unshift(prod5); // Agrega 1er elemento de Array
products.push(prod6); // Agrega último elemento en Array

console.log(products);

products.shift(products[0]);
products.pop(products[products.length-1]);

console.log(products);*/

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.description= description;
    this.color = color;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }

  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newSupplier) {
    this._supplier = newSupplier
  }

  sellUnits(units) {
    if (units > this.stock) {
      console.log(`No hay suficiente stock. Stock actual: ${this.stock} unidades.`)
    } else {
      this.stock = this.stock - units;
    }
  }
};

const prod1 = new Product('JF0001', 'Xiaomi Redmi Note 7', 720, 9, 'img0001.jpg', false, 'Xiaomi Co., Ltd.');
const prod2 = new Product('JF0002', 'Xiaomi Redmi 9T', 980, 5, 'img0002.jpg', true, 'Xiaomi Co., Ltd.');
const prod3 = new Product('JF0003', 'Xiaomi Redmi Note 8', 1200, 3, 'img0003.jpg', false, 'Xiaomi Co., Ltd.');
const prod4 = new Product('JF0004', 'Xiaomi Redmi Note 11 Pro', 1400, 4, 'img0004.jpg', false, 'Xiaomi Co., Ltd.');
const prod5 = new Product('JF0005', 'Xiaomi Redmi Note 12', 1500, 12, 'img0005.jpg', true, 'Xiaomi Co., Ltd.');
const prod6 = new Product('JF0006', 'Xiaomi Redmi Note 13 Pro', 2100, 7, 'img0006.jpg', false, 'Xiaomi Co., Ltd.');

/*prod4.supplier = 'Xiaomi Communicactions Co,. Ltd.';
console.log(`Proveedor de JF0004: ${prod4.supplier}`);*/

/*prod5.sellUnits(10);
prod5.sellUnits(5);*/

const products = [prod1, prod2, prod3, prod4];

console.log(products);
/*console.log(products[1]);
console.log(products[products.length-1].title);*/

products.unshift(prod5);
console.log(products);

products.push(prod6);
console.log(products);

products.shift(products[0]);
console.log(products);

products.pop(products[products.length-1]);
console.log(products);