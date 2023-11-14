import React from 'react'
import ReactDOM from 'react-dom/client';

/* Layout */
import Layout from './layout'
import Card from './components/Card';
import { Grid } from '@mui/material';
import TableInfoDetail from './components/TableInfoDetail';

const data = [
  {
    "title": "title",
    "id": 1,
    "text": "djavu"

  },
  {
    "title": "title2",
    "id": 2,
    "text": "djavu"

  },
  {
    "title": "title3",
    "id": 3,
    "text": "djavu"

  }
]

const CardContent = () => {
  return (
    <Grid
      container
      spacing={ 3 }
      p={ 2 }
      alignItems="center"
      justifyContent="center"

    >
      {
        data.map((obj, index) => (
          <Grid
            key={ index }
            item
            xs={ 10 }
            md={ 5 }
            xl={ 4 }
          >
            <Card 
              id={obj.id}
              title={obj.title}
              text={obj.text}

            />
          </Grid>
        ))
      }
    </Grid>
  )
}

function App() {
  return (
    <>
      <Layout>
        <div style={{ margin:"auto", maxWidth:768 }}>
          <CardContent/>
          <TableInfoDetail/>
        </div>

        
      </Layout>
    </>

  );
}

export default App;
