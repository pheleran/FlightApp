'use client'
import { Filter, Flight, options } from "../models";
import { getAirportList, getFlightList } from "../requests";
import{useFormik} from'formik'
import { useState } from 'react'
import * as Yup from 'yup';
import { useQuery } from "react-query";
import Select, { SingleValue } from 'react-select'
import FlightTable from "./FlightTable";
import FlightReturnTable from "./FlightReturnTable";

// Validation Schema for Filtering options of Flight List
const filterSchema = Yup.object().shape({
    isFlightOneWay: Yup.boolean(),
    departDate: Yup.string()
        .test('is-later-then-today', 'Geçmiş tarih seçimi yapılamaz.', function (value) {
            if (value !== undefined) {
                const now = new Date()
                return new Date(value) > now;
            }
            return false

        })
        .required("Gidiş tarihi seçiniz"),
    returnDepartDate: Yup.string().when('isFlightOneWay', {
        is: false,
        then: Yup.string().test('is-later-than-depart', 'Dönüş tarihi, gidiş tarihinden sonra olmalıdır.', function (value) {
            if (value !== undefined) {
                const departDate = this.parent.departDate;
                return new Date(value) >= new Date(departDate);
            }
            return false

        }).required('Dönüş tarihi seçiniz'),
        otherwise: Yup.string()
    }),
    fromAirport: Yup.string()
        .required("Kalkış havaalanınızı seçiniz"),
    toAirport: Yup.string().test('is-same-airport', 'Kalkış ve varış havaalanları aynı olamaz', function (value) {
        const fromAirport = this.parent.fromAirport;
        return value !== fromAirport;
    })
        .required("Gidiş havaalanınızı seçiniz"),
});


const FlightList = () => {
    const [selectedFromAirport, setSelectedFromAirport] = useState<SingleValue<options> | undefined>(undefined);
    const [selectedToAirport, setSelectedToAirport] = useState<SingleValue<options> | undefined>(undefined);
    const [flights, setFligths] = useState<Array<Flight>>()
    const [isThereFlight, setIsThereFlight] = useState<boolean>();
    const [isThereReturnFlight, setIsThereReturnFlight] = useState<boolean>();
    const [returnFlights, setReturnFlights] = useState<Array<Flight>>()

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderColor: 'violet-300', // İlk border rengini burada belirtin
        }),
    };

    // Formik Created for Filter
    const { handleChange, handleSubmit, values, errors, touched } = useFormik({
        validationSchema: filterSchema,
        initialValues: {
            departDate: undefined,
            returnDepartDate: undefined,
            toAirport: undefined,
            fromAirport: undefined,
            isFlightOneWay: false
        },

        onSubmit: (values) => {
            setFligths(undefined)
            setReturnFlights(undefined)
            if (values.isFlightOneWay) {
               const lenght =  filterFlightList()
                if (lenght > 0) {
                    setIsThereFlight(true)
                }
                else if ( lenght === 0) {
                    setIsThereFlight(false)
                }
            }
            if (!values.isFlightOneWay) {
                const length =filterFlightList()
                const lengthReturn =filterReturnFlightList()
              
                if (length > 0) {
                    setIsThereFlight(true)
                }
                else if (length == 0) {
                    setIsThereFlight(false)
                }
                if (lengthReturn > 0) {
                    setIsThereReturnFlight(true)
                }

                else if (lengthReturn === 0) {
                    setIsThereReturnFlight(false)
                }
            }
            console.log("submit")
            
        }
    });
    // Fetching Airport and Flights Data
    const {
        isFetching: airportFetching,
        refetch: airportRefetch,
        error: airportError,
        isError: airportIsError,
        data: airportList,
    } = useQuery(
        `airport-list`,
        () => {
            return getAirportList();
        },
        { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
    );

    const {
        isFetching: flightFetching,
        refetch: flightRefetch,
        error: flightError,
        isError: flightIsError,
        data: flightList,
    } = useQuery(
        `flight-list`,
        () => {
            return getFlightList().then(res => res as Flight[])
        },
        { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
    );
    // Converting airportList to Array<options> to give as an option to react-select
    let airportsAsOptions = airportList?.map(airport => { return { label: airport.name + " / " + airport.code + " / " + airport.country + " - " + airport.city, value: airport.code } })

// Filtering flights list 
    const filterFlightList = () => {
        const filteredFlight = flightList!.filter((x: Flight) => {
            return x.fromAirport === values.fromAirport && x.toAirport === values.toAirport && x.departDate === values.departDate
        });
        setFligths(filteredFlight)
        return filterFlightList.length
    }
// If users don't select oneWay filtering flight list filtering according to return information
    const filterReturnFlightList = () => {
        const filteredReturnFlight = flightList!.filter((x: Flight) => {
            return x.fromAirport === values.toAirport && x.toAirport === values.fromAirport && x.departDate === values.returnDepartDate
        });
        setReturnFlights(filteredReturnFlight)
        return filterFlightList.length
    }
// Handle change of react-select component for fromAirport and to Airport
    const _handleChangeFromAirtport = (option: SingleValue<options> | any) => {
        setSelectedFromAirport(option)
        values.fromAirport = option.value

    }
    const _handleChangeToAirtport = (option: SingleValue<options> | any) => {
        setSelectedToAirport(option)
        values.toAirport = option.value

    }
    console.log(isThereFlight)

    return (

                <div className="grid place-content-center ">
                    {/* ---------------- Start Filter -------------------- */}
                    <form className="self-center">
                        <div className="   grid grid-cols-6 gap-10 w-75 border border-4 p-10 border-violet-300 rounded-lg bg-white align-middle">
                            <div className='grid grid-flow-row  place-content-center ' >
                                <label> Kalkış Havaalanı</label>
                                <Select
                                    className='rounded-md w-56'
                                    name="startAirport"
                                    isSearchable={true}
                                    isMulti={false}
                                    styles={customStyles}
                                    value={selectedFromAirport}
                                    options={airportsAsOptions}
                                    onChange={_handleChangeFromAirtport}

                                />
                                {errors.fromAirport && touched.fromAirport ? (
                                    <div className="text-xs text-red-500 mt-2">{errors.fromAirport}</div>
                                ) : null}
                            </div>
                            <div className='grid grid-flow-row'>
                                <label>Varış Havaalanı</label>
                                <Select
                                    className=' rounded-md w-56'
                                    name="endAirport"
                                    isSearchable={true}
                                    isMulti={false}
                                    styles={customStyles}
                                    value={selectedToAirport}
                                    options={airportsAsOptions}
                                    onChange={_handleChangeToAirtport}

                                />
                                {errors.toAirport && touched.toAirport ? (
                                    <div className="text-xs text-red-500 mt-2">{errors.toAirport}</div>
                                ) : null}
                            </div>
                            <div className='grid grid-flow-row mt-8'>
                                <label>
                                    <input
                                        className='border border-violet-600 rounded-md'
                                        type="checkbox"
                                        id="isFlightOneWay"
                                        name="isFlightOneWay"
                                        checked={values.isFlightOneWay}
                                        onChange={handleChange}
                                    />
                                    Tek Yön
                                </label>
                            </div>
                            <div className='grid grid-flow-row'>
                                <label>Gidiş Tarihi</label>

                                <input type="date"
                                    id="departDate"
                                    name="departDate"
                                    onChange={handleChange}
                                    className='border border-violet-600 rounded-md p-2'></input>
                                {errors.departDate && touched.departDate ? (
                                    <div className="text-xs text-red-500 mt-2">{errors.departDate}</div>
                                ) : null}
                            </div>
                            {
                                values.isFlightOneWay == false &&
                                <div className='grid grid-flow-row'>
                                    <label>Dönüş Tarihi</label>
                                    <input type="date"
                                        id="returnDepartDate"
                                        name="returnDepartDate"
                                        onChange={handleChange}
                                        className='border border-violet-600 rounded-md p-2'></input>
                                    {errors.returnDepartDate && touched.returnDepartDate ? (
                                        <div className="text-xs text-red-500 mt-2">{errors.returnDepartDate}</div>
                                    ) : null}
                                </div>
                            }
                            <button type="button" onClick={() => handleSubmit()} className='rounded-md h-20 bg-violet-500 max-h-12 text-white mt-6'>Ara</button>

                        </div>
                    </form>

                    {/* ---------------- End Filter -------------------- */}
                    {/* ---------------- Start Tables  -------------------- */}
                    <div className=" grid place-content-center ">


                        {isThereFlight !== undefined && airportList ? <>{flights !== undefined && flights.length > 0 ? <FlightTable flights={flights!} isFlightOneWay={values.isFlightOneWay} airports={airportList} /> : <div className="bg-white p-5 rounded-full w-54 mt-10 text-center drop-shadow-xl"> UÇUŞ BULUNAMADI </div>}</> : <> </>}

                        {isThereReturnFlight !== undefined && values.isFlightOneWay == false && airportList ? <>{returnFlights !== undefined && returnFlights.length > 0 ? <FlightReturnTable flights={returnFlights!} isFlightOneWay={values.isFlightOneWay} airports={airportList} /> : <div className="bg-white p-5 rounded-full w-54 mt-10 text-center drop-shadow-xl">DÖNÜŞ UÇUŞU BULUNAMADI </div>}</> : <> </>}
                    </div>
                     {/* ---------------- Start Tables  -------------------- */}
                      {/* ----------------  Start Error and Fetching   -------------------- */}
                    <div className=" grid place-content-center ">
                    {flightFetching && airportFetching &&  <div className="bg-white p-5 rounded-full w-48 mt-10 text-center text-violet-500 drop-shadow-xl"> Yükleniyor...</div>}
                    </div>
                    <div className=" grid place-content-center ">
                    {flightIsError && airportIsError &&  <div className="bg-white p-5 rounded-full w-48 mt-10 text-center text-red-500 drop-shadow-xl"> Veriler yüklenirken bir hata ile karşılaşıldı </div>}
                    </div>
                      {/* ----------------  End Error and Fetching   -------------------- */}


        </div>
    )
}
export default FlightList;