import React from 'react'
import { formatBreadcrumContent } from '../../utils/breadcrum.formatter.utility'
import './Breadcrum.scss'

const Breadcrum = ({breadcrum}) => {
  return (
    <nav className="breadcrumb">
        {formatBreadcrumContent(breadcrum)}
    </nav>
  )
}

export default Breadcrum;