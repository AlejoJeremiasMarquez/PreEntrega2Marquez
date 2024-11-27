const products = [
  {
    id: "1",
    name: "Peugeot 208",
    price: 20000,
    category: "0KM",
    img: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_8a6721feb2124b2e8ce38ee407cb8403.webp",
    stock: 25,
    description: "Descripcion de Peugeot 208",
  },
  {
    id: "2",
    name: "Citroen C3",
    price: 800,
    category: "0KM",
    img: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0db8955ac91b489a817b0cd1754b978e.webp",
    stock: 16,
    description: "Descripcion de Citroen C3",
  },
  {
    id: "3",
    name: "Fiat Palio",
    price: 1200,
    category: "usados",
    img: "https://cdn.motor1.com/images/mgl/nJQZ1/s1/adios-al-fiat-nuevo-palio.webp",
    stock: 7,
    description: "Descripcion de Fiat Palio",
  },
  {
    id: "4",
    name: "BMW X6",
    price: 1200,
    category: "exclusivos",
    img: "https://cdcssl.ibsrv.net/autodata/images/?img=USD40BMS211B01311.jpg&width=600&height=450",
    stock: 9,
    description: "Descripcion de BMW X6",
  },
  {
    id: "5",
    name: "Fiat Fastback",
    price: 800,
    category: "0KM",
    img: "https://fastback.fiat.com.ar/content/dam/fiat/products/376/b38/0/2025/page/hero.png",
    stock: 16,
    description: "Descripcion de Fiat Fastback",
  },
  {
    id: "6",
    name: "Chevrolet Cruze",
    price: 800,
    category: "0KM",
    img: "https://www.chevrolet.com.ar/content/dam/chevrolet/sa/argentina/espanol/index/cars/cruze-5-premier/colorizer-1/02-images-2021/colorizer-branco-abalone.jpg?imwidth=960",
    stock: 16,
    description: "Descripcion de Chevrolet Cruze",
  },
  {
    id: "7",
    name: "Renault Clio",
    price: 1200,
    category: "usados",
    img: "https://i0.wp.com/autoaldia.tv/wp-content/uploads/2015/07/Nuevo-Renault-Clio-Work-2.jpg?ssl=1",
    stock: 1,
    description: "Descripcion de Renault Clio",
  },
  {
    id: "8",
    name: "Eco Sport",
    price: 1200,
    category: "usados",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2d4u_Wd3V_buyP8E4GqxA6VIF4QsCX4WUQA&s",
    stock: 6,
    description: "Descripcion de Eco Sport",
  },
  {
    id: "9",
    name: "Audi A3",
    price: 1200,
    category: "exclusivos",
    img: "https://www.km77.com/revista/wp-content/uploads/2013/03/02-1024x683.jpg",
    stock: 18,
    description: "Descripcion de Audi A3",
  },
];

// obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};
