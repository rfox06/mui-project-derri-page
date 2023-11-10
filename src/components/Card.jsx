import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    /* Fetching API */
    /* ... */
    const result = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ]
    setData(result)
  }, [])

  return (
    <Grid
      container
      spacing={ 3 }
      p={ 2 }
      alignItems="center"
      justifyContent="center"

    >
      {
        data.map((value, index) => (
          <Grid
            key={ index }
            item
            xs={ 10 }
            md={ 5 }
            xl={ 4 }
          >
             <Card  sx={{ minWidth: 275 }}>
             <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
             />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day { value }
                </Typography>
                <Typography variant="h5" component="div">
                  bene vbull obull lent sss
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}