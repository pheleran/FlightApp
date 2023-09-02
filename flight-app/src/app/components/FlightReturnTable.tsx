import { Airport, Flight } from "../models"
import { FC, useState } from "react"
type Props = {
    flights: Array<Flight>
    isFlightOneWay: boolean
    airports: Array<Airport>
}
const FlightReturnTable: FC<Props> = ({ flights, isFlightOneWay, airports }) => {
      // String to date converter for sorting by  depart date.
    const [flightsSorted, setFligthsSorted] = useState<Array<Flight>>()
    const stringToDateConverter = (time: string) => {
        const [hour, minute] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hour, minute, 0, 0);
        return date;

    }
    // Sorting buttons's handlers 
    const handleSortDuration = (orderType: string) => {

        if (orderType == "desc") {
            const sortedFlights = [...flights].sort((a, b) => {
                if (a.duration > b.duration) return -1;
                if (a.duration < b.duration) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)

        }
        if (orderType == "asc") {
            const sortedFlights = [...flights].sort((a, b) => {
                if (a.duration < b.duration) return -1;
                if (a.duration > b.duration) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)
        }
    }
    const handleSortPrice = (orderType: string) => {

        if (orderType == "desc") {
            const sortedFlights = [...flights].sort((a, b) => {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)

        }
        if (orderType == "asc") {
            const sortedFlights = [...flights].sort((a, b) => {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)
        }
    }
    const handleSortTime = (orderType: string) => {
        if (orderType == "desc") {
            const sortedFlights = [...flights].sort((a, b) => {
                const x = stringToDateConverter(a.departTime)
                const y = stringToDateConverter(b.departTime)
                if (x > y) return -1;
                if (x < y) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)

        }
        if (orderType == "asc") {
            const sortedFlights = [...flights].sort((a, b) => {
                const x = stringToDateConverter(a.departTime)
                const y = stringToDateConverter(b.departTime)
                if (x < y) return -1;
                if (x > y) return 1;
                return 0;

            })
            setFligthsSorted(sortedFlights)
        }
    }
    return (
        <div className="bg-white w-full p-10 mt-10 rounded-lg border">
            <h1 className="text-xl font-bold mb-5">Dönüş Uçuşları</h1>
            <table className="min-w-full text-left text-md font-light p-10 mb-10">
                <thead className="border-b font-medium dark:border-neutral-500 ">
                    <tr >
                        <th >
                            Rota

                        </th>

                        <th>
                            Kalkış Saati
                            <button className="hover:text-violet-300 " onClick={() => handleSortTime("asc")}>▲</button>
                            <button className="hover:text-violet-300 " onClick={() => handleSortTime("desc")}>▼</button>
                        </th>
                        <th>
                            Uçuş Uzunluğu
                            <button className="hover:text-violet-300 " onClick={() => handleSortDuration("asc")}>▲</button>
                            <button className="hover:text-violet-300 " onClick={() => handleSortDuration("desc")}>▼</button>
                        </th>
                        <th>
                            {"Fiyat (TL) "}
                            <button className="hover:text-violet-300 " onClick={() => handleSortPrice("asc")}>▲</button>
                            <button className="hover:text-violet-300 " onClick={() => handleSortPrice("desc")}>▼</button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {flightsSorted != undefined ? flightsSorted.map((flight: Flight) => <tr className=" border-b dark:border-neutral-500 "> <td className="p-2 grid grid-cols-3">
                        <div className="row">
                            <span className="font-bold"> Havayolu: {flight.airline} </span>  <br />   Kalkış Şehri: {airports.find(x => x.code === flight.fromAirport)?.city} <br /> Kalkış Havaalanı :  {airports.find(x => x.code === flight.fromAirport)?.name}
                        </div>
                        <div className="grid place-content-center ">
                            <span className="self-center text-violet-500"> {"------>"}</span>
                        </div>
                        <div className="row">
                            Varış Şehri:  {airports.find(x => x.code === flight.toAirport)?.city} <br /> Varış Havaalanı :  {airports.find(x => x.code === flight.toAirport)?.name}
                        </div>
                    </td> <td> {flight.departTime}</td><td> {flight.duration}</td> <td> {flight.price}</td></tr>) : flights.map((flight: Flight) => <tr className=" border-b dark:border-neutral-500 ">  <td className="p-2 grid grid-cols-3">

                        <div className="row">
                            <span className="font-bold"> Havayolu: {flight.airline} </span>  <br />   Kalkış Şehri: {airports.find(x => x.code === flight.fromAirport)?.city} <br /> Kalkış Havaalanı :  {airports.find(x => x.code === flight.fromAirport)?.name}
                        </div>
                        <div className="grid place-content-center ">
                            <span className="self-center text-violet-500"> {"------>"}</span>
                        </div>
                        <div className="row">
                            Varış Şehri:  {airports.find(x => x.code === flight.toAirport)?.city} <br /> Varış Havaalanı :  {airports.find(x => x.code === flight.toAirport)?.name}
                        </div>
                    </td> <td> {flight.departTime}</td><td> {flight.duration}</td> <td> {flight.price}</td></tr>)}

                </tbody>
            </table>
        </div>
    )
}
export default FlightReturnTable;