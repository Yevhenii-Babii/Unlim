import Logo from '../../images/unlinLogo.png'
import {  FooterLogo, MainFooterWrapper } from './footer.styled'
import { SocialMediaList } from './socialMediaList/socialMediaList'

export const Footer = () => {
    return(
       
        <MainFooterWrapper>
        
            <div>
<FooterLogo src={Logo} alt="Logo Unlim service"/>
            </div>
            <div>
<SocialMediaList/>
            </div>
        
        </MainFooterWrapper>
       
    )
}