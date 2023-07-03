class ProductManager {

    constructor(){
        this.products = []
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){

        for(let i=0; i<this.products.length;i++){
            if (this.products[i].code === code){
                console.log(`El codigo ${code} se repite`);
                break;
            }
        }

        const newProduct ={
            title, description, price, thumbnail, code, stock
        }

        //Paso para validar que esten todos los campos requeridos
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct, id:ProductManager.id});
        }else{
            console.log("Falta completar un campo");
        }    
    }

    getProduct(){
        return this.products;
    }

    existe(id){
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }

}

const productos = new ProductManager

console.log(productos.getProduct()) //Arreglo vacio

productos.addProduct("Mochila", "Es un producto para niños", 200, "Sin imagen", "abc123", 25);

console.log(productos.getProduct()) //Arreglo con el primer producto

productos.addProduct("Cartuchera", "Estuche para utiles escolares", 500, "Sin imagen", "abc124",);

console.log(productos.getProduct())//Arreglo con mas de un producto

productos.getProductById(1); //Busco si existe el Id

productos.addProduct("Guardapolvo", "Vestimenta escolar", 1000, "Sin imagen", "abc123", 100);//En este caso se repite el codigo 