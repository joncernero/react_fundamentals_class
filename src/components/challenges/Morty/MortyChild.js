import React from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap'

const MortyChild = props => {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src='/assets/256x186.svg'
        alt='Card image cap'
      />
      <CardBody>
        <CardTitle tag='h5'>Card title</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted'>
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}

export default MortyChild
