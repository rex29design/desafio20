class Product {
    constructor(name) {
        this.name = name
        this.category = ""
    }

    speak() {
        console.log(`Product:${this.name} Category:${this.category}`);
    }
}

class ProductoLacteo extends Product {
    constructor(name) {
        super(name) 
        this.category = 'lacteos'
    }
}

class ProductoBebida extends Product {
    constructor(name) {
        super(name) 
        this.category = 'bebidas'
    }
}

class ProductoCarnes extends Product {
    constructor(name) {
        super(name) 
        this.category = 'carnes'
    }
}

class MyProductFactory {
    createEmployee(data) {
        if(data.category == 'bebidas') return new ProductoLacteo(data.name)
        if(data.category == 'lacteos') return new ProductoBebida(data.name)
        if(data.category == 'carnes') return new ProductoCarnes(data.name)
    }
}

const factory = new MyProductFactory()

const category = [
    {category: 'bebidas', name: 'cerveza'},
    {category: 'lacteos', name: 'leche'},
    {category: 'carnes', name: 't-bone'},
    {category: 'carnes', name: 'pechuga pollo'},
    {category: 'lacteos', name: 'queso panela'},
    {category: 'bebidas', name: 'agua mineral'},
]

const products = []
categories.forEach(category => products.push(factory.createProduct(category)))

console.log(products);
products.forEach(e => e.speak())