export interface IBaseSettings {
    baseUrl: string,
    productPageSize: number,
    phone: string,
    email: string,
    url: string,
}

export default Object.freeze<IBaseSettings>({
    baseUrl: import.meta.env.API_URL ?? "http://localhost:7070/api/",
    productPageSize: 6,
    phone: "+7-495-790-35-03",
    email: "office@bosanoga.ru",
    url:"BosaNoga.ru"
})