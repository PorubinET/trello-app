import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "./trelloCard.scss"


const TrelloCard = ({ text }) => {
  return (
      <Card>
        <CardContent>
          <Typography>   
            {text}
            {/* <BorderColorIcon/>    */}
          </Typography>
        </CardContent>
      </Card>
  );
};




export default TrelloCard;