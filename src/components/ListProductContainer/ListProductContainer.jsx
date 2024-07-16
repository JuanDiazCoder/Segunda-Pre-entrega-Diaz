import { useEffect, useState } from "react";
import "./ListProductContainer.css";
import { getProducts, getProductsByCategory } from "../asycmok";
import ListProducts from "../ListProducts/ListProducts";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ListProductContainer = ({ greetings}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
      const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      console.log(asyncFunctions)
      asyncFunctions(categoryId).then((res) =>{
        setProducts(res)
      })
    },[categoryId])

  return (
    <section className="container my-4">
      <h2 className="productos-title text-center mb-5 heading">{greetings}</h2>
      <div className="row">
        <ListProducts products={products}/>
      </div>
    </section>
  );
};

export default ListProductContainer;
