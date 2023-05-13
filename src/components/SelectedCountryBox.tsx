import { gql, useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";

function queryAsString(code: string) : string {
    return `
    query GetCountry {
        country(code: "${code}") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
          phones
        }
      }
    `
}

function SelectedCountryBox() {

    //@ts-ignore
    const code = useSelector((state) => state.code);

    const query = queryAsString(code);
    
    const glqQuery = gql`${query}`;

    const {loading, data, error} = useQuery(glqQuery);

    useEffect(() => {
        console.log("CODE ", code);
        console.log(data);
    }, [code, data])

    return (<>
        {loading && <CircularProgress />}
        {error && <p>Loading failed</p>}
        {data && data.country && <CountryCard country={data.country} />}
        
    </>);
}

export default SelectedCountryBox;