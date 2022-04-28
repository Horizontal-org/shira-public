import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ImageWrapperProps {
  imageSize?: string
}

const ProfilePicture:FunctionComponent<ImageWrapperProps> = ({
  imageSize
}) => {
  return (
    <ImageWrapper 
      imageSize={imageSize}
    >
      <Img 
        alt='profile-picture'
        src='https://pps.whatsapp.net/v/t61.24694-24/75371321_2168977896730211_7317259923947115642_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=c1ccd4df2b5607958d55e9e0aecc721f&oe=627688E0'
      />
    </ImageWrapper>
  )
}

const ImageWrapper = styled('div')<ImageWrapperProps>`
  width: ${(props) => props.imageSize};
  height: ${(props) => props.imageSize};
`

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

ProfilePicture.defaultProps = {
  imageSize: '40px',
}

export default ProfilePicture