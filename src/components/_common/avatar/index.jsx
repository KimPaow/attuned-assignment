import { styled } from "@/theme/stitches.config"

export const Avatar = styled('div', {
  width: '$3',
  height: '$3',
  borderRadius: '$full',
  objectFit: 'cover',
  backgroundSize: 'cover',
  flexShrink: 0,

  variants: {
    size: {
      md: {
        width: '$4',
        height: '$4',
      }
    }
  }
})

export default Avatar