import axios from "axios";
import config from "../config";

const token="Bearer "+localStorage.getItem("token");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      }



export async function addBook(productData,author,yearOfPublication,conditionOfBook,category){
    const formData = new FormData();

    // Add images to the FormData
    if (productData.img1) formData.append("image", productData.img1);
    if (productData.img2) formData.append("image", productData.img2);
    if (productData.img3) formData.append("image", productData.img3);
    if (productData.img4) formData.append("image", productData.img4);

    // Prepare the book data
    const bookData = {
        productTitle: productData.productTitle,
        productDescription: productData.productDescription,
        price: productData.price,
        location: productData.location,
        author: author,
        userId: localStorage.getItem("id"),
        yearOfPublication: yearOfPublication,
        conditionOfBook: conditionOfBook,
        category: category,
    };

    // Append the book data as a string to the FormData
    formData.append("bookdata", JSON.stringify(bookData));

        // Send the request to the backend
        const response = await axios.post(`${config.url}book/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
        });



    return response.data;
}


export async function addVehicle(productData,brand,vehicleType,fuelType,modelName,manufacturedDate,purchaseDate,category){
    const formData = new FormData();

    // Add images to the FormData
    if (productData.img1) formData.append("image", productData.img1);
    if (productData.img2) formData.append("image", productData.img2);
    if (productData.img3) formData.append("image", productData.img3);
    if (productData.img4) formData.append("image", productData.img4);

    // Prepare the book data
    const vehicledata = {
    productTitle: productData.productTitle,
    productDescription: productData.productDescription,
    price: productData.price,
    location: productData.location,
    userId: localStorage.getItem("id"),
    manufaturer: brand,
    vehicleType: vehicleType,
    fuelType: fuelType,
    modelName: modelName,
    manufaturerDate: manufacturedDate,
    purchaseDate: purchaseDate,
    category:category,
    };

    // Append the book data as a string to the FormData
    formData.append("vehicledata", JSON.stringify(vehicledata));

        // Send the request to the backend
        const response = await axios.post(`${config.url}vehicle/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
        });



    return response.data;
}


export async function addFurniture(productData,manufaturer,yearOfPurchase,typeOfFurniture,category){
    const formData = new FormData();

    // Add images to the FormData
    if (productData.img1) formData.append("image", productData.img1);
    if (productData.img2) formData.append("image", productData.img2);
    if (productData.img3) formData.append("image", productData.img3);
    if (productData.img4) formData.append("image", productData.img4);

    // Prepare the book data
    const furnituredata = {
    productTitle: productData.productTitle,
    productDescription: productData.productDescription,
    price: productData.price,
    location: productData.location,
    userId: localStorage.getItem("id"),
    manufaturer: manufaturer,
    yearOfPurchase: yearOfPurchase,
    typeOfFurniture: typeOfFurniture,
    category: category,
    };

    // Append the book data as a string to the FormData
    formData.append("furnituredata", JSON.stringify(furnituredata));

        // Send the request to the backend
        const response = await axios.post(`${config.url}furniture/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
        });



    return response.data;
}


export async function addElectronics(productData,manufaturer,yearOfPurchase,type,modelName,category){
    const formData = new FormData();

    // Add images to the FormData
    if (productData.img1) formData.append("image", productData.img1);
    if (productData.img2) formData.append("image", productData.img2);
    if (productData.img3) formData.append("image", productData.img3);
    if (productData.img4) formData.append("image", productData.img4);

    // Prepare the book data
    const electronicsdata = {
    productTitle: productData.productTitle,
    productDescription: productData.productDescription,
    price: productData.price,
    location: productData.location,
    userId: localStorage.getItem("id"),
    manufaturer: manufaturer,
    yearOfPurchase: yearOfPurchase,
    modelName: modelName,
    type: type,
    category: category,
    };

    // Append the book data as a string to the FormData
    formData.append("electronicsdata", JSON.stringify(electronicsdata));

        // Send the request to the backend
        const response = await axios.post(`${config.url}electronics/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
        });



    return response.data;
}






export async function getProduct() {
    const response = await axios.get(`${config.url}getallproduct`)

    return response.data
}


export async function getBook() {
    
    const response = await axios.get(`${config.url}book/getallProduct`)

    return response.data
}

export async function getVehicle() {
    
    const response = await axios.get(`${config.url}vehicle/getallProduct`)

    return response.data
}


export async function getFurniture() {
    
    const response = await axios.get(`${config.url}furniture/getallProduct`)

    return response.data
}

export async function getElectronics() {
    
    const response = await axios.get(`${config.url}electronics/getallProduct`)

    return response.data
}


export async function getSpecificProduct(productId) {
    const result = await axios.get(`${config.url}getproduct/${productId}`)
    
    console.log(result.data.category)

    if(result.data.category=='book'){
        const response=await axios.get(`${config.url}book/get/${productId}`)
        return response.data
    }
    else if(result.data.category=='vehicle'){
        const response=await axios.get(`${config.url}vehicle/get/${productId}`)
        return response.data
    }
    else if(result.data.category=='furniture'){
        const response=await axios.get(`${config.url}furniture/get/${productId}`)
        return response.data
    }
    else if(result.data.category=='electronics'){
        const response=await axios.get(`${config.url}electronics/get/${productId}`)
        return response.data
    }
}

export async function getLocation(location) {
    
    const response = await axios.get(`${config.url}getbylocation/${location}`)

    return response.data
}

export async function getPrice(price) {
    
    const response = await axios.get(`${config.url}getproductbyprice/${price}`)

    return response.data
}

export async function searchProduct(charactertofind) {
    
    const response = await axios.get(`${config.url}getproductbytitle/${charactertofind}`)

    return response.data
}

