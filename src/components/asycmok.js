const products = [
    {
      id:"1",
      imagen: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
      nombre: "Auto de deportivo",
      category: "Deportivos",
      description:"El Auto Deportivo es la encarnación de la velocidad, la precisión y el lujo. Diseñado para los entusiastas de la conducción que buscan una experiencia de manejo inigualable, este vehículo combina un rendimiento impresionante con una estética deslumbrante. Equipado con un motor de alta potencia, el Auto Deportivo puede acelerar de 0 a 100 km/h en menos de 3.5 segundos, ofreciendo una conducción dinámica y emocionante en cualquier carretera.",
      precio: 345.600,
      stock: 3,
    },
    {
      id:"2",
      imagen: "https://media.gq.com.mx/photos/5ffb6e84cbc9d2690de1643e/16:9/w_1920,c_limit/autos-200-mph.jpg",
      nombre: "Auto de lujo",
      category: "AltaG",
      description:"El Auto de Lujo es la perfecta fusión de sofisticación, innovación y confort, diseñado para aquellos que buscan una experiencia de conducción excepcional en cada trayecto. Este vehículo no solo es un símbolo de estatus, sino también una manifestación de la artesanía y la ingeniería de alta precisión.",
      precio: 210.500,
      stock: 2,
    },
    {
      id:"3",
      imagen: "https://media.gq.com.mx/photos/604458fef0cc2a1d8969755c/16:9/w_1920,c_limit/10%20autos%20que%20quieren%20ser%20el%20mejor%20de%202021%20-%20BMW%204-Series%202021%20(1).jpg",
      nombre: "Auto de Cuidad",
      category: "Ciudad",
      description:"El Auto de Ciudad es la opción ideal para la movilidad urbana, combinando practicidad, eficiencia y estilo en un paquete compacto y versátil. Diseñado para navegar sin esfuerzo por calles estrechas y estacionamientos reducidos, este vehículo es la elección perfecta para quienes buscan comodidad y economía en la vida urbana moderna.",
      precio: 140.000,
      stock: 12,
    }
  ];
  
export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod)=> prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
  };