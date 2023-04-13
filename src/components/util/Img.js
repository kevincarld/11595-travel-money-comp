import React from 'react'
import { Image } from '@chakra-ui/react'
import { mock as mockFunc } from 'utils/common'

export default function Img({ dimension, alt, mock=false, src, ...rest}) {
  const [width, height] = dimension.split('x')
  const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "gray", "maroon", "navy", "olive", "teal", "silver", "gold", "indigo", "magenta", "turquoise", "peach", "coral"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const mockSrc = mockFunc(dimension, mock, randomColor)

  return (
    <Image
      src={ src ? src : mock ? mockSrc : ''}
      htmlWidth={width}
      htmlHeight={height}
      alt={alt || 'image'}
      {...rest}
    />
  )
}
