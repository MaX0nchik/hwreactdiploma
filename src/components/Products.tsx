import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectLoadMoreButton } from "../redux/slices/loadMoreSlice";
import { selectPages } from "../redux/slices/pagesSlices";
import { selectApiParams, setApiParams } from "../redux/slices/apiPramsSlice";
import { useEffect } from "react";
import SearchProducts from "./SearchProducts";
import Categories from "./Categories";
import ProductsPage from "./ProductsPage";
import ProductsMore from "./ProductsMore";

interface IProdProps {
  showsearch?: boolean;
}

const Products = ({ showsearch }: IProdProps) => {
  const { isVisible: isLoadButtonVisible, isDisabled: isLoadButtonDisabled } =
    useAppSelector(selectLoadMoreButton);
  const pages = useAppSelector(selectPages);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { categoryID, offset, query } = useAppSelector(selectApiParams);

  useEffect(() => {
    const queryParam = { categoryID, offset, query };
    const categoryParam = parseInt(searchParams.get("category") || "0");
    const searchParam = searchParams.get("q") || "";

    let isNeedUpdate = false;

    if (categoryParam >= 0 && categoryParam != categoryID) {
      queryParam.categoryID = categoryParam;
      isNeedUpdate = true;
    }

    if (searchParam != "") {
      queryParam.query = searchParam;
      isNeedUpdate = true;
    }

    if (isNeedUpdate) {
      dispatch(setApiParams(queryParam));
    }
  }, [categoryID, dispatch, offset, query, searchParams]);

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {showsearch && <SearchProducts />}
        <Categories />
        {pages.map(({ id, offset }) => (
          <ProductsPage key={id} offset={offset} />
        ))}
        {isLoadButtonVisible && (
          <ProductsMore disabled={isLoadButtonDisabled} />
        )}
      </section>
    </>
  );
};

export default Products;
