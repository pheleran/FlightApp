export type Flight =
{
    fromAirport: string,
    toAirport: string,
    price:number,
    airline:string,
    duration: string,
    departTime: string,
    departDate:string
}
export type Airport =
{
    name: string,
    code: string,
    country:string,
    city: string
}
export type options = {
    value:string
    label:string
}
export type Filter = {

    fromAirport?: string,
    toAirport?: string,
    departDate?:string,
    isFlightOneWay?:boolean,
    returnDate?:string
}


