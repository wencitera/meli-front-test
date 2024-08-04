import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ItemList = () => {

  const location = useLocation();

  const [query, setQuery] = useState();
  // Parsear los parámetros de búsqueda
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setQuery(query);
  }, [])

  return (
    <h1>{query}</h1>
  )
}

export default ItemList