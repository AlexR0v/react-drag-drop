import styled from '@emotion/styled'

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  height: '100px',
  marginBottom: '30px'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

export const List = styled.ul({
  listStyle: 'none',
  paddingLeft: 0
})

export const Item = styled.li({
  display: 'flex',
  alignItems: 'center',
  border: 'solid 2px #d0d0d0',
  borderRadius: '.2em',
  padding: '.5em .8em .5em .5em',
  marginBottom: '1em'
})

export const ItemName = styled.p({
  maxWidth: 'none',
  fontWeight: 'bold',
  margin: 0,
})

export const ItemCard = styled.div({
  overflow: 'hidden',
  flexShrink: 0,
  width: '2em',
  height: '2em',
  backgroundColor: '#e8e8e8',
  padding: '.5em',
  marginRight: '.5em',
})

export const ItemImg = styled.img({
  display: 'block',
  width: '100%',
  height: 'auto',
})