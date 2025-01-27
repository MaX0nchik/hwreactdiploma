import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../hooks/useHooksApi";
import { ISizes } from "../models/Products";
import ErrorMessage from "../components/ErrorMessage";
import Preloader from "../components/Preloader";
import { useState } from "react";
import { addToCart } from "../hooks/useLocalStorage";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetProductQuery(id as string);

  const [count, setCount] = useState<number>(1);

  const [selectedSize, setSize] = useState<string>("");

  const addCount = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const subtractionCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const setAvailable = (size?: string) => {
    if (!size) {
      return;
    }
    setSize(size);
  };

  const handleAddToCart = () => {
    addToCart(selectedSize, count, product);
  };

  return (
    <>
      {isError && <ErrorMessage error={error} reload={refetch} />}
      {!isError && (isLoading || isFetching) && <Preloader />}
      {!isError && !isLoading && !isFetching && (
        <section className="catalog-item">
          <h2 className="text-center">{product?.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={
                  product?.images && product.images.length > 0
                    ? product.images[0]
                    : ""
                }
                className="img-fluid"
                alt=""
              />
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
                <p>
                  Размеры в наличии: <span></span>
                  {product?.sizes?.map((item: ISizes) => (
                    <span
                      key={item.size}
                      className={
                        "catalog-item-size" +
                        (selectedSize === item.size ? " selected" : "")
                      }
                      onClick={() => setAvailable(item.size)}
                    >
                      {item.size}
                    </span>
                  ))}
                </p>
                <p>
                  Количество:{" "}
                  <span className="btn-group btn-group-sm pl-2">
                    <button
                      className="btn btn-secondary"
                      onClick={subtractionCount}
                      disabled={count < 2}
                    >
                      -
                    </button>
                    <span className="btn btn-outline-primary">{count}</span>
                    <button
                      className="btn btn-secondary"
                      onClick={addCount}
                      disabled={count > 9}
                    >
                      +
                    </button>
                  </span>
                </p>
              </div>
              <button
                className="btn btn-danger btn-block btn-lg"
                onClick={handleAddToCart}
              >
                В корзину
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
