import axios from 'axios'

const countries = "countriesData";
const continent = "continentData";
const total = "totalData"


const data_Global = axios.create({
    baseURL: 'https://covid-19-coronavirus-statistics2.p.rapidapi.com',
    method: "GET",
    "headers": {
        "x-rapidapi-key": "2f627d12d3mshefe5a3aab02c970p145cc9jsn6ebc2c4b3cff",
        "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
        "useQueryString": true
    }
})

export const Global = async function (route){
   await data_Global(`./${route}`)
   .then(res=>console.log(res))
   .catch(err=>console.log(err))
}
