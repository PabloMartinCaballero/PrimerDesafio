
//Creación de la clase ProductManager
class ProductManager {
    constructor(products){
        this.products = products
    }

    addProduct(product){
        //utilizar el metodo Find para buscar el ID de los productos existentes, crear una condicion
        //iterar sobre todas las propiedades para confirmar que existan todas 
    }

    getProducts(){};

    getProductById(id){

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


//Producto 1 Bajo

const PRODUCT1 = new Product("Bass","Instrument",70000,"https://images.ctfassets.net/m8onsx4mm13s/5hbt5as9BU0fGz2lh7PUm5/f5189313b5fdaf068e57b601a6f42313/__static.gibson.com_product-images_Kramer_KRA65W106_Satin_Black_KDB1OSBBH1_front.jpg" ,1234, 5)
     console.log(PRODUCT1);

//Instancia de la clase ProductManager

const PRODUCT_MANAGER = new ProductManager([]);
    console.log(PRODUCT_MANAGER);



//Metodo que sera utilizado para confirmar que no se repita la propiedad code dentro de mi objeto

const validate = (Product, ProductManager)=>{

//Utiliozo el metodo entries para transformar al objeto que va a ser ingresado en un array

let ObjectEntries = Object.entries(Product)
    console.log(ObjectEntries);

//Filtro la propiedad code (Metodo que sera utilizado para el filtro de entrada a mi array) (Transformo esto en una función)

let filterCode = ObjectEntries.filter((code)=>
code.includes("code")
)
    console.log(filterCode)

//Necesito traer todas las priedades code de ProductManager y compararlas con las del objeto entrante (FilterCode) este metodo se puede utilizar para getProducts

 if(ProductManager.products = []){
    console.log("VERDADERO")
    ProductManager.products.push(Product)
 } else if (true) {
    console.log("Corneta")
 }

};


validate(PRODUCT1,PRODUCT_MANAGER);
console.table(PRODUCT_MANAGER.products)


//Traigo todas las propiedades code de mis objetos y las comparo con el objeto a ingresar, para esto debo iterar en el array

let codeCompare = (codeEntries)=> {

    //Itero sobre el array de objetos
    let managerCode = PRODUCT_MANAGER.products.forEach((products)=>{

     //Convierto al objeto en un array
        let productsArray = Object.entries(products)
         console.log(productsArray)
    
        //Filtro la propiedad code de cada uno de los objetos dentro
        let productsCode = productsArray.filter((code)=>
        code.includes("code")
        );

        const compareArray = (codeEntries,productsCode) => {

            let result = codeEntries.every((arr,i)=> arr === productsCode[i])
             console.log(result)
             return result
             
         }
         
         compareArray(codeEntries,productsCode);

         if(compareArray == true){
            console.log("Son iguales")
        }else{
            console.log("No lo son corneta")
        }

    });
}

const PRODUCT2 = ["code", 1235];

codeCompare(PRODUCT2);


//Instancio un nuevo objeto a ingresar 
/*
const a1 = ["code", 1235];
const a2 = ["code", 1236]; 

console.log(a1.every((arr,i)=> arr === a2[i]))

const compareArray = (a1,a2) => {

   let result = a1.every((arr,i)=> arr === a2[i])
    console.log(result)
    return result
    
}
compareArray(a1,a2)
*/
