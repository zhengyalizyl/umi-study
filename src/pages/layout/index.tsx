import React from 'react'
import { IRouteComponentProps } from 'umi';

export default function index(props:IRouteComponentProps) {
if(props.location.pathname==='/login'){
return (<div>login</div>)
}
console.log(props)
  return (
    <div>page layout{props.children}</div>
  )
}
