/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ product}) {

    return (
        <div className="card mx-auto" style={{ width: '18rem'}}>
            <div className="card-body text-center">
            <img src={product.imagen} className="card-img" alt={product.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">Precio: €{product.precio}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <Link to={`/detail/${product.id}`} className="btn btn-secondary">Ver detalles</Link>
                </div>
                <button className="btn btn-primary">Añadir al carrito</button>
            </div>
        </div>
    );
}

Product.propTypes = {
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

export default Product;
