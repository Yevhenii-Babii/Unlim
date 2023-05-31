import imageOne from '../../images/photo1.jpg'
import imageTwo from '../../images/photo2.jpeg'
import imageThree from '../../images/photo3.jpeg'
import { PhotoUnlimOne, Wrapper } from './imageBlock.styled'

export const ImageBlock = () => { 
    return (
        <>
        <Wrapper>
            <PhotoUnlimOne src={imageOne} alt="" />
            <PhotoUnlimOne src={imageTwo} alt="" />
            <PhotoUnlimOne src={imageThree} alt="" />
        </Wrapper>
        </>
    )
}