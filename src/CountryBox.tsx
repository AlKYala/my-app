import { gql, useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface CountriesSearchQuery {
    name: string,
    code: string,
}

const countriesQuery = gql`
query {
    countries {
      name,
      code
    }
  }
`;


function CountryBox() {

    const [selectedCode, setSelectedCode] = useState("");

    const {loading, data, error} = useQuery(countriesQuery);
    
    const [options, setOptions] = useState<CountriesSearchQuery[]>([]);

    useEffect(() => {

        //only fires if data is actually loaded
        if(data) {
            //do when data is loaded
            const countries = data.countries;
            const countriesMapped = countries.map((elem: any) => {return {code: elem.code, label: elem.name};})
            console.log(countriesMapped);
            setOptions(countriesMapped);
        }
        if(error) {}

    }, [data, error]);


    return (<>
        {loading && <CircularProgress />}
        {data && 
        
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Country" />}
        />
        
        }
    </>);
}

export default CountryBox;