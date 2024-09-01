import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import React from 'react';

export default function CardPart({ data }) {
  return (
    <Grid2 container sx={{width:'100%'}}> 
      {data.map((item, index) => (
        <Grid2 key={index} item> 
          <Card sx={{ width: '50%', height: '90%' }}>
            <CardActionArea>
              <CardMedia 
                component="img"
                image={item.flag}
                alt={item.name} 
                sx={{
                  width: '70%',
                  height: 'auto',
                  mx: 'auto', // Horizontally center the image
                  display: 'block', // Remove any inline block spacing issues
                  paddingX: '16px',
                  paddingY:'16px' // Adjust the padding as needed
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
