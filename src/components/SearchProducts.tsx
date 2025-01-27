import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectApiParams, setApiParams } from "../redux/slices/apiPramsSlice";
import { useEffect, useState } from "react";
import { setApiParamsString } from "../models/ApiParams";

const SearchProducts = () => {
  const [urlSearchParams] = useSearchParams();
  const { categoryID, offset, query } = useAppSelector(selectApiParams);

  const [search, setSearch] = useState(() => {
    const urlParam = urlSearchParams.get("q");
    return urlParam || query || "";
  });

  const location = useLocation();

  useEffect(() => {
    const searchParam = urlSearchParams.get("q") || "";
    setSearch(searchParam);
  }, [location, urlSearchParams]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      "/catalog.html" +
        setApiParamsString({ categoryID, offset, query: search })
    );
    dispatch(setApiParams({ query: search }));
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={submitHandler}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchProducts;
