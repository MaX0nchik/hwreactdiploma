import { ICategory } from "../models/Category";
import { useGetCategoriesQuery } from "../hooks/useHooksApi";
import Category from "./Category";
import ErrorMessage from "./ErrorMessage";
import Preloader from "./Preloader";

const Categories = () => {
  const {
    data: categories = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetCategoriesQuery();

  if (isError) {
    return <ErrorMessage error={error} reload={refetch} />;
  }

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories && categories.length > 0 ? (
        <Category key={0} id={0} title="Все" />
      ) : null}
      {categories.map(({ id, title }: ICategory) => (
        <Category key={id} id={id} title={title} />
      ))}
    </ul>
  );
};

export default Categories;
