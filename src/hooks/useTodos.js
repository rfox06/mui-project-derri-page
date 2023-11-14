import React from 'react'

/* Config */
import config from '../config'

/* Custom Hook */
const useTodos = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    setLoading(true); /* this active the backdrop */

    fetch(`${config.API_HOST}/todos`, { method: 'GET' }) /* async */
      .then(response => response.json())
      .then(result => {
        if(Array.isArray(result)) setData(result) /* the data is changed */;
        else setError(new Error('API Data Error'));
      })
      .catch(() => setError(new Error('API General Error')))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return [
    data,
    loading,
    error
  ]
}

export default useTodos;
