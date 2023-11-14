import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function CustomCard({
  id,
  title,
  text,
}) {
  return (
    <Card >
      <CardMedia
          sx={{ height: 140 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day { id }
        </Typography>
        <Typography variant="h5" component="div">
          bene vbull obull lent sss { title }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective {text}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly ccccccccccccccc.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )         
}