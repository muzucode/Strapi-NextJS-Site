import React from 'react'
import styled from 'styled-components'

export interface IBody {
  content: string
}
export default function Body(props: IBody) {

  function createMarkup() {
    return {__html: props.content};
  }
  
  return (
    <Container dangerouslySetInnerHTML={createMarkup()} className='body'/>
  )
}

const Container = styled.div`

`