import React from 'react'

export interface IRegion {
  title: string,
  children?: JSX.Element
}
export default function Region(props: IRegion) {
  return (
    <div className={"region-" + props.title}>
      {props.children}
    </div>
  )
}