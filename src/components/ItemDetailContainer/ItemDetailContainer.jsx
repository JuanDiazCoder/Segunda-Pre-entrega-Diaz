import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../asycmok";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()
    console.log(productId)
    useEffect(() => {
        getProductById(productId)
            .then((res) => {
                console.log("res", res);
                setProduct(res);
                console.log("res2", res);
            })
            .catch((err) => console.log(err));
    }, [productId]);
    console.log("product", product)

    return (
        <>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <div className="loading-container">
                    <p className="loading-text">Loading...</p>
                    <div className="spinner"></div>
                </div>
            )}
        </>
    );
}

export default ItemDetailContainer