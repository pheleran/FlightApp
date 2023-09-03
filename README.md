# FlightApp
Installation

git clone https://github.com/pheleran/FlightApp
cd flight-app
npm install --legacy-peer-deps

You should use " npm run dev " to start project

Important Notes

Please consider below json data information while filtering the flights.
I recommend selecting "Kalkış Havaalanı"  as CDG, "Varış Havaalanı" as LHR , "Gidiş Tarihi" as "15.09.23" , "Dönüş Tarihi" as "10.10.23"

[
  {
    "fromAirport": "FCO",
    "toAirport": "LHR",
    "airline": "Turkish Airlines",
    "price": 160,
    "duration": 105,
    "departTime": "13:20",
    "departDate": "2023-09-24"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "FCO",
    "airline": "Lufthansa",
    "price": 160,
    "duration": 105,
    "departTime": "13:20",
    "departDate": "2023-09-28"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "FRA",
    "airline": "Emirates",
    "price": 200,
    "duration": 90,
    "departTime": "14:45",
    "departDate": "2023-09-24"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "CDG",
    "airline": "British Airways",
    "price": 200,
    "duration": 90,
    "departTime": "14:45",
    "departDate": "2023-09-28"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "CDG",
    "airline": "Air France",
    "price": 220,
    "duration": 135,
    "departTime": "10:30",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "CDG",
    "airline": "British Airways",
    "price": 220,
    "duration": 135,
    "departTime": "11:30",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "CDG",
    "airline": "Air France",
    "price": 220,
    "duration": 135,
    "departTime": "11:45",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "LHR",
    "airline": "Lufthansa",
    "price": 220,
    "duration": 130,
    "departTime": "15:30",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "LHR",
    "airline": "Air France",
    "price": 220,
    "duration": 120,
    "departTime": "16:30",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "LHR",
    "airline": "Emirates",
    "price": 220,
    "duration": 150,
    "departTime": "17:10",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "LHR",
    "airline": "British Airways",
    "price": 200,
    "duration": 200,
    "departTime": "03:30",
    "departDate": "2023-09-15"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "FCO",
    "airline": "Lufthansa",
    "price": 280,
    "duration": 150,
    "departTime": "08:00",
    "departDate": "2023-09-24"
  },
  {
    "fromAirport": "FCO",
    "toAirport": "FRA",
    "airline": "Turkish Airlines",
    "price": 280,
    "duration": 150,
    "departTime": "08:00",
    "departDate": "2023-12-05"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "FRA",
    "airline": "Air France",
    "price": 250,
    "duration": 150,
    "departTime": "11:45",
    "departDate": "2023-12-09"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "LHR",
    "airline": "Emirates",
    "price": 250,
    "duration": 150,
    "departTime": "13:30",
    "departDate": "2023-12-12"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "FRA",
    "airline": "British Airways",
    "price": 220,
    "duration": 150,
    "departTime": "15:30",
    "departDate": "2023-12-16"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "CDG",
    "airline": "Lufthansa",
    "price": 220,
    "duration": 150,
    "departTime": "16:45",
    "departDate": "2023-12-20"
  },
  {
    "fromAirport": "FCO",
    "toAirport": "LHR",
    "airline": "Turkish Airlines",
    "price": 180,
    "duration": 120,
    "departTime": "10:15",
    "departDate": "2023-12-24"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "FCO",
    "airline": "Lufthansa",
    "price": 180,
    "duration": 120,
    "departTime": "11:30",
    "departDate": "2023-12-28"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "FRA",
    "airline": "Emirates",
    "price": 210,
    "duration": 135,
    "departTime": "09:45",
    "departDate": "2023-10-02"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "CDG",
    "airline": "British Airways",
    "price": 210,
    "duration": 135,
    "departTime": "10:30",
    "departDate": "2023-10-06"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "CDG",
    "airline": "Air France",
    "price": 220,
    "duration": 150,
    "departTime": "11:15",
    "departDate": "2023-10-10"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "CDG",
    "airline": "British Airways",
    "price": 220,
    "duration": 135,
    "departTime": "13:30",
    "departDate": "2023-10-10"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "FCO",
    "airline": "Lufthansa",
    "price": 180,
    "duration": 120,
    "departTime": "14:45",
    "departDate": "2023-10-18"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "FCO",
    "airline": "Turkish Airlines",
    "price": 180,
    "duration": 120,
    "departTime": "15:15",
    "departDate": "2023-10-22"
  },
  {
    "fromAirport": "CDG",
    "toAirport": "FRA",
    "airline": "Emirates",
    "price": 210,
    "duration": 135,
    "departTime": "10:30",
    "departDate": "2023-10-26"
  },
  {
    "fromAirport": "FRA",
    "toAirport": "CDG",
    "airline": "British Airways",
    "price": 210,
    "duration": 135,
    "departTime": "11:45",
    "departDate": "2023-10-30"
  },
  {
    "fromAirport": "FCO",
    "toAirport": "LHR",
    "airline": "Turkish Airlines",
    "price": 180,
    "duration": 120,
    "departTime": "13:00",
    "departDate": "2023-11-03"
  },
  {
    "fromAirport": "LHR",
    "toAirport": "FCO",
    "airline": "Lufthansa",
    "price": 180,
    "duration": 120,
    "departTime": "14:15",
    "departDate": "2023-11-07"
  }
]
