import { useAppDispatch } from "../redux/hooks";
import { addPage } from "../redux/slices/pagesSlices";

interface IProductsMore {
  disabled: boolean;
}

const ProductsMore = ({ disabled }: IProductsMore) => {
  const dispatch = useAppDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(addPage())}
        disabled={disabled}
      >
        Загрузить еще
      </button>
    </div>
  );
};

export default ProductsMore;
