import { gql, useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../store/actions";

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

    const {loading, data, error} = useQuery(countriesQuery);
    
    const [options, setOptions] = useState<CountriesSearchQuery[]>([]);

    const code = useSelector((state: any) => state.code);

    const dispatch = useDispatch();

    useEffect(() => {

        //only fires if data is actually loaded
        if(data) {
            //do when data is loaded
            const countries = data.countries;
            const countriesMapped = countries.map((elem: any) => {return {code: elem.code, label: elem.name};})
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
            onChange={(event, newValue) => {
                //@ts-ignore
                dispatch(setCode(newValue.code));
            }}
        />
        
        }
    </>);
}

export default CountryBox;