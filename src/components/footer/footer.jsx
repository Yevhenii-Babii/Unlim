import Logo from '../../images/unlinLogo.png'
import { BackgroundFooter, FooterLogo, MainFooterWrapper } from './footer.styled'
import { SocialMediaList } from './socialMediaList/socialMediaList'

export const Footer = () => {
    return(
       
        <MainFooterWrapper>
        <BackgroundFooter>
            <div>
<FooterLogo src={Logo} alt="Logo Unlim service"/>
            </div>
            <div>
<SocialMediaList/>
            </div>
        </BackgroundFooter>
        </MainFooterWrapper>
       
    )
}