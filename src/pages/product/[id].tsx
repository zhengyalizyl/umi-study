import React from 'react'
import { IRouteComponentProps } from 'umi';

export default function Product(props:IRouteComponentProps) {

  return (
    <div>Product/[id]-----{props.match?.params?.id}</div>
  )
}
