import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeCartItem, selectCartItems } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  let commonSum = 0;

  cart.map((item) => {
    if (item.price) {
      commonSum = commonSum + item.count * item.price;
    }
  });

  const handleRemoveFromCart = (productId: number, selectedSize: string) => {
    const newItem = {
      id: productId,
      selectedSize: selectedSize,
    };
    dispatch(removeCartItem(newItem));
  };
  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        {cart.length === 0 ? (
          <h2 className="text-center">Корзина пуста!</h2>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <h2 className="text-center">Корзина пуста!</h2>
              ) : (
                cart.map((item, index) => (
                  <tr key={`${item.id}-${item.selectedSize}`}>
                    <td scope="row">{index + 1}</td>
                    <td>
                      <a href={`/products/${item.id}.html`}>{item.title}</a>
                    </td>
                    <td>{item.selectedSize}</td>
                    <td>{item.count}</td>
                    <td>{item.price} руб.</td>
                    <td>
                      {item.price ? item.price * item.count : item.price} руб.
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          handleRemoveFromCart(item.id, item.selectedSize)
                        }
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td colSpan={5} className="text-right">
                  Общая стоимость
                </td>
                <td>{commonSum} руб.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                className="form-control"
                id="phone"
                placeholder="Ваш телефон"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input
                className="form-control"
                id="address"
                placeholder="Адрес доставки"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
              />
              <label className="form-check-label" htmlFor="agreement">
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cart;
