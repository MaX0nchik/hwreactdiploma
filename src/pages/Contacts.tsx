import appSettings from "../models/BaseSettings";

const Contacts = () => {
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Контакты</h2>
        <p>
          Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе,
          д. 17, бизнес-центр W Plaza.
        </p>
        <h5 className="text-center">Координаты для связи:</h5>
        <p>
          Телефон: <a href={"tel: " + appSettings.phone}>{appSettings.phone}</a>
          (ежедневно: с 09-00 до 21-00)
        </p>
        <p>
          Email:{" "}
          <a href={"mailto: " + appSettings.email}>{appSettings.email}</a>
        </p>
      </section>
    </>
  );
};

export default Contacts;
