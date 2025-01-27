import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { setApiParams } from "../redux/slices/apiPramsSlice";


const SearchBlock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        setSearch("");
        setIsVisible(false);
    }, [location])

    const handlerSearchClick = () => {
        const params = new URLSearchParams();
        if (search.trim()){
            if (search) {
                params.set('q', search);
            }
            navigate(`catalog.html?${params.toString()}`);
            dispatch(setApiParams({query:search}));
        }
        else {
            setIsVisible(false);
        }
    };

    const handlerShowClick =() => {
        setIsVisible((prev) => !prev);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handlerSearchClick();
    }

    return(
        <>
            {!isVisible && (
                <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handlerShowClick}></div>
            )}
            {isVisible && (
                <form data-id="search-form" className={"header-controls-search-form form-inline" + (isVisible ? "" : " invisible")} onSubmit={submitHandler}>
                    <input className="form-control" placeholder="Поиск" onChange={(e)=>
                        {setSearch(e.target.value);}} value={search} autoFocus/>
                    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handlerSearchClick}></div>
                </form>
            )}
        </>
    )
};

export default SearchBlock;