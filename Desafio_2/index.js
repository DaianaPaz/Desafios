const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);



let persistirProduct = async () => {
    let product = await productManager.addProduct("Mochila", "Es un producto para niños", 200, "Sin imagen", "abc123", 25);


    let products = await productManager.getProducts();
    console.log(`Productos encontrados en Product Manager: ${products.length}`);
    console.log(products);

    let foundProduct = await productManager.getProductById("abc123");
    console.log("Producto encontrado por ID:");
    console.log(foundProduct);

    await productManager.updateProduct("abc123", { price: 200, description: "Es un producto para niños" });

    await productManager.deleteProduct("abc123");

};

persistirProduct();
