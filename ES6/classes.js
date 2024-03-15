class Carro {

    constructor(marca) { //constructor: propriedades da classe
        this.marca = marca;
    }

    present() { //
        return 'A marca é ' + this.marca;
    }
}

class Modelo extends Carro { //extends cria uma herança de classe

    constructor(marca, modelo) {
        super(marca); // método que refere-se à classe pai
        this.modelo = modelo;
    }
    
    show() {
        return this.present() + ', este é o ' + this.modelo;
    }
}

const carro1 = new Carro('Fiat');
const carro2 = new Modelo('Ford', 'Mustang');

console.log(carro1.marca);
carro2.show();