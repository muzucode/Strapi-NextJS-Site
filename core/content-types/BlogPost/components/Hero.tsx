import React from 'react'
import styled from 'styled-components'

interface IHero {
  url: string
}
export default function Hero(props: IHero) {

  // Set placeholder if no image in place
  const background = props.url ? `${process.env.NEXT_PUBLIC_API_URI}${props.url}` : '/assets/img-placeholder.jpg'
  // Set styles
  const styles = {
    backgroundImage: `url(${background})`
  }

  return (
    <div className="hero" style={styles}/>
  )
}