
//Creación de la clase ProductManager
class ProductManager {
    constructor(products){
        this.products = products
    }
    
    addProducts(Product){

        //Utiliozo el metodo entries para transformar al objeto que va a ser ingresado en un array
        
            let ObjectEntries = Object.entries(Product)
            console.log(ObjectEntries);
        
        //Filtro la propiedad code 
        
            let filterCode = ObjectEntries.filter((code)=>
            code.includes("code")
            )
            console.log(filterCode)

        //Itero sobre el array de objetos existentes en PM
        
            this.products.forEach((products)=>{
        
        //Convierto al objeto iterado en un array
        
            let productsArray = Object.entries(products)
            console.log(productsArray)
               
        //Filtro la propiedad code de cada uno de los objetos dentro

            let productsCode = productsArray.filter((code)=>
            code.includes("code")
            );
        
             const compareArray = (filterCode,productsCode) => {
           
                let result = filterCode.every((arr,i)=> arr === productsCode[i])
                console.log(result)
                return result
                        
                }
        
            let compCodes = compareArray(filterCode,productsCode)
            console.log(compCodes)
        
        //Necesito traer todas las priedades code de ProductManager y compararlas con las del objeto entrante (FilterCode) este metodo se puede utilizar para getProducts
                
            if (compCodes == false) {
                this.products.push(Product)
            } else {
                console.log("El producto ya existe")
            }
        
        })
        
        }
    }
    

//Creación de la clase Product
class Product {
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}



const PRODUCT1 = new Product("Bass","Instrument",70000,"https://images.ctfassets.net/m8onsx4mm13s/5hbt5as9BU0fGz2lh7PUm5/f5189313b5fdaf068e57b601a6f42313/__static.gibson.com_product-images_Kramer_KRA65W106_Satin_Black_KDB1OSBBH1_front.jpg" ,1234, 5)

const PRODUCT2 = new Product("Guitar","Instrument",80000,"https://images.ctfassets.net/m8onsx4mm13s/5hbt5as9BU0fGz2lh7PUm5/f5189313b5fdaf068e57b601a6f42313/__static.gibson.com_product-images_Kramer_KRA65W106_Satin_Black_KDB1OSBBH1_front.jpg" ,1235, 5)


const PRODUCT_MANAGER = new ProductManager([]);
    console.log(PRODUCT_MANAGER);

PRODUCT_MANAGER.addProducts(PRODUCT1)
console.log(PRODUCT_MANAGER)


