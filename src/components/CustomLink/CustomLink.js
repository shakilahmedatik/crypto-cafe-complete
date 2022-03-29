import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <div>
      <Link style={{ color: match ? '#0991B1' : 'black' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}

export default CustomLink
