class Persona {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
  }
  comer(cantidad) {
    this.vida = this.vida + cantidad;
    console.log(
      "La vidad de " + this.nombre + " acaba de aumentar a: " + this.vida
    );
  }
  entrenar(cantidad) {
    this.vida = this.vida - cantidad;
    console.log(
      "La vida de " + this.nombre + " acaba de disminuir a: " + this.vida
    );
  }
}

const juan = new Persona("Juan", 100);
const martha = new Persona("Martha", 120);

console.log(juan);
console.log(martha);

juan.comer(10);
juan.comer(50);
juan.comer(5);
juan.entrenar(30);

martha.comer(20);
martha.entrenar(50);
martha.comer(40);
