import Copyrights from "./Copyrights";
import NavInfo from "./NavInfo";
import Pay from "./Pay";
import data from "../models/BaseSettings";
import Social from "./Social";

const navItems = [
    {name:"О магазине", link: "/about.html"},
    {name:"Каталог", link:"/catalog.html"},
    {name:"Контакты", link:"/contacts.html"},
]


const payItems = [
    {name: "paypal"},
    {name: "master-card"},
    {name: "visa"},
    {name: "yandex"},
    {name: "webmoney"},
    {name: "qiwi"},
]

const socialItems = [
    {name: "twitter"},
    {name: "vk"},
]

export const Footer = () => {
    return(
        <footer className="container bg-light footer">
            <div className="row">
                <div className="col">
                    <section>
                        <h5>Информация</h5>
                        <NavInfo items={navItems} className="nav flex-column"/>
                    </section>
                </div>
                <div className="col">
                    <section>
                        <h5>Принимаем к оплате:</h5>
                        <div className="footer-pay">
                            {payItems.map(({name}) => 
                            (
                                <Pay key={name} name={name}/>
                            ))}
                        </div>
                    </section>
                    <section>
                        <Copyrights/>
                    </section>
                </div>
                <div className="col text-right">
                    <section>
                        <h5>Контакты:</h5>
                        <a className="footer-contacts-phone" href={"tel: " + data.phone}>
                            {data.phone}
                        </a>
                        <span className="footer-contacts-working-hours">
                            Ежедневно: с 09-00 до 21-00
                        </span>
                        <a className="footer-contacts-email" href={"mailto:"+data.email}>
                            {data.email}
                        </a>
                        <div className="footer-social-links">
                            {socialItems.map(({name})=>(
                                <Social key={name} name={name}/>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer;