import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props: any) {

    const country = props.country;

    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {country.name} {country.emoji} {country.languages.name} : {country.native}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Currency: {country.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Phone Codes:
              {country.phones.map(((elem: string) => 
                <p>{elem} </p>
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }