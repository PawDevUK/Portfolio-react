import axios from 'axios'
const URL = process.env.REACT_APP_COVID_URL_UK;

const getData = async ( queries ) => {

  

    const { data, status, statusText } = await axios.get(URL, { 
        params: queries,
        timeout: 10000 
    });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData


export const data_UK = async () => {

    const
        AreaType = "nation",
        AreaName = "scotland";

    const
        filters = [
            `areaType=${ AreaType }`,
            `areaName=${ AreaName }`
        ],
        structure = {
            date: "date",
            name: "areaName",
            code: "areaCode",
            cases: {
                new: "newCasesByPublishDate",
                cumulative: "cumCasesByPublishDate"
            },
            deaths: {
                new: "newDeathsByDeathDate",
                cumulative: "cumDeathsByDeathDate"
            }
        };


    const
        apiParams = {
            filters: filters.join(";"),
            structure: JSON.stringify(structure),
            // latestBy: "newCasesByPublishDate"
        };

    const result = await getData(apiParams);

    return result

};  // main


data_UK().catch(err => {
    console.error(err);
    process.exitCode = 1;
});