import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/Api";
import { ISizes } from "../models/Products";
import ErrorMessage from "../components/ErrorMessage";
import Preloader from "../components/Preloader";


const Product = () => {
    const {id} = useParams();
    const {data: product, isLoading, isFetching, isError, error, refetch} = useGetProductQuery(id as string);


    return(
        <>
          {isError && <ErrorMessage error={error} reload={refetch}/>}
          {!isError && (isLoading || isFetching) && <Preloader/>}
          {!isError && !isLoading && !isFetching && (
          <section className="catalog-item">
                    <h2 className="text-center">{product?.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={product?.images && product.images.length > 0 ? product.images[0] : ""}
                                className="img-fluid" alt=""/>
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{product?.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{product?.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{product?.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{product?.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{product?.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{product?.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <p>Размеры в наличии: 
                                    {product?.sizes?.map((item : ISizes) => (
                                        <span key={item.size} className={"catalog-item-size" + (item.available? "selected" : "")}>
                                            {item.size}
                                            </span>))}
                                </p>
                                <p>Количество: {" "}<span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary">-</button>
                                        <span className="btn btn-outline-primary">1</span>
                                        <button className="btn btn-secondary">+</button>
                                    </span>
                                </p>
                            </div>
                            <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                        </div>
                    </div>
                </section>)}
            </>
    )
}

export default Product;