import { useGetProductsQuery } from "../redux/Api";
import { useAppSelector } from "../redux/hooks";
import { selectApiParams } from "../redux/slices/apiPramsSlice";
import ErrorMessage from "./ErrorMessage";
import Preloader from "./Preloader";
import ProductCards from "./ProductCards";


interface IProductsPage {
    offset: number;
}

const ProductsPage = ({offset} : IProductsPage) => {
    const {categoryID, query} = useAppSelector(selectApiParams);
    const { data: products = [],
        isLoading,
        isFetching,
        isError, 
        error,
    } = useGetProductsQuery({categoryID, offset, query});

    return(
        <>
        {isError && <ErrorMessage error={error} />}
        {!isError && (isLoading || isFetching) && <Preloader/>}
        {!isError && !isLoading && !isFetching && products.length > 0 && (
            <ProductCards products={products}/>
        )}
        </>
    )
};

export default ProductsPage;