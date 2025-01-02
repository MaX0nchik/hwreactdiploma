import { NavLink } from "react-router-dom";
import { INavItem } from "../models/NavItem";


interface INavInfo {
    items: INavItem[],
    className: string,
}

export const NavInfo = ({items, className} : INavInfo) => {
        const linkClass = ({isActive} : {isActive: boolean}) => 
        ["nav-link", isActive ? "active" : ""].join(" ");

        return(
            <ul className={className}>
                {items.map(({name, link}:INavItem)=>(
                    <NavLink key={name} className={linkClass} to={link}>
                        {name}
                        </NavLink>
                ))}
            </ul>
        )

}


export default NavInfo;