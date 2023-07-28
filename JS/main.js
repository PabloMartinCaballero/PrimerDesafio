
    class ProductManager {
        constructor(){
            this.products = [];
        }

        getProduct(){
            return this.product;
        }

        getProductById (id){
            let product = this.product.find(product => product.id == id)

            if(product){
                return product
            } else {
                console.log("No se encontro el producto")
            }
        }

        addProduct(product) {
            if(this.products.find( prod => prod.code == product.code)){
                return "Existing product"
            } 
            
            if (product.code != "" || product.stock >= 0) {
                this.products.push(product)
            } else {
                return "Empy product"
            }

            
        }

    }


    class product {
        constructor(title, description, price, thumbnail, code, stock){
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
            this.id = product.increaseID()
        }

         static increaseID(){
            if(this.idIncrement){
                this.idIncrement++
            } else {
                this.idIncrement = 1 
            }
            return this.idIncrement
         }
    }


const PRODUCT1 = new product ("Bass", "Fender Bass", 80000, "", 2244, 20);

const PRODUCT2 = new product ("Guitar", "Gibson Guitar", 90000, "", 2245, 20);

console.log(PRODUCT1);
console.log(PRODUCT2);

const productManager = new ProductManager();

productManager.addProduct(PRODUCT1);
productManager.addProduct(PRODUCT2);

console.log(productManager);




