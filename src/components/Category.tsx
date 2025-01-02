import { Link } from "react-router-dom";
import { ICategory } from "../models/Category";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectApiParams, setApiParams } from "../redux/slices/apiPramsSlice";
import { setApiParamsString } from "../models/ApiParams";
import { resetPages } from "../redux/slices/pagesSlices";


const Category = ({id, title} : ICategory) => {
    const {categoryID, query} = useAppSelector(selectApiParams);
    const dispatch = useAppDispatch();
    const className = ["nav-link", id === categoryID ? "active" : ""].join(" ");

    return(
        <li className="nav-item">
            <Link className={className} to={setApiParamsString({categoryID: id, offset: 0, query})}
            onClick={()=> {dispatch(setApiParams({categoryID: id, offset: 0, query}));
            dispatch(resetPages()); 
            }}>
            {title}
            </Link>
        </li>
    )

};

export default Category;