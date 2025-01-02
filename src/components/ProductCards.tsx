import { IProducts } from "../models/Products";
import ProductCard from "./ProductCard";


interface IProductCards {
    products: IProducts[];
}

const ProductCards = ({products} : IProductCards) => {
    return(
        <div className="row">
            {products.map(({id, category, title, price, images}: IProducts) => (
                <div key={id} className="col-4">
                    <ProductCard id={id} title={title} price={price} images={images} category={category}/>
                </div>
            ))}
        </div>
    )
};

export default ProductCards;