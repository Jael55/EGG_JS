class Product {
  constructor(id, tittle, price, stock, images, onsale, supplier) {
    this.id = id;
    this.tittle = tittle;
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
    this._supplier = newSupplier;
  }

  sellUnits(units) {
    if (units > this.stock) {
        console.log("No hay suficiente estock")
    }
    else this.stock = this.stock - units;
  }
}

const prod1 = new Product();
const prod2 = new Product("JF0002", "Celular", 1800);
const prod3 = new Product("JF0003", "Tablet", 1200, 5, "Foto3.jpg", true);
const prod4 = new Product("JF0004", "Laptop", 4500, 10, "Foto4.jpg", false, "Asus");
const prod5 = new Product("JF0005", "PC Gamer", 7200, 7, "Foto5.jpg", true, "Lenovo");

prod4.supplier = "Asus Ltd";
console.log("El proveedor del producto 4 es: " + prod4.supplier);

prod5.sellUnits(3);

//prod5.sellUnits(5);

prod4.sellUnits(1);

console.log("Stock actual del producto 5 es: " + prod5.stock + " unidades");
console.log("Stock actual del producto 4 es: " + prod4.stock + " unidades");

console.log("Productos: ");
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);
console.log(prod2.tittle);
console.log(prod3.onsale);
console.log(prod4.supplier);
console.log(prod5.stock);
