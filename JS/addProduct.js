

 const addProduct = (Product)=>{

    //Utiliozo el metodo entries para transformar al objeto que va a ser ingresado en un array
    
        let ObjectEntries = Object.entries(Product)
        console.log(ObjectEntries);
    
    //Filtro la propiedad code 
    
        let filterCode = ObjectEntries.filter((code)=>
        code.includes("code")
        )
        console.log(filterCode)
    
    //Itero sobre el array de objetos existentes en PM
    
        let managerCode = PRODUCT_MANAGER.products.forEach((products)=>{
    
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
            
        if(ProductManager.products = []){
            console.log("Primer producto agregado al carrito")
            ProductManager.products.push(Product)
        } else if (compCodes == false) {
            ProductManager.products.push(Product)
        } else {
            console.log("El producto ya existe")
        }
    
    })
    
    }
    
   