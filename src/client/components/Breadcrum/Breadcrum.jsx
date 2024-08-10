import React from 'react'
import { formatBreadcrumContent } from '../../utils/breadcrum.formatter.utility'
import './Breadcrum.scss'

const Breadcrum = ({breadcrum}) => {
  return (
    <nav aria-label="Ruta de navegación" className="breadcrumb">
        {formatBreadcrumContent(breadcrum)}
    </nav>
  )
}

export default Breadcrum;