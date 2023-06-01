import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { LinkIcon, WrapperIconsList } from './socialMediaList.styled';
export const SocialMediaList = () => {
    const instagramUrl = 'https://www.instagram.com/unlim.service/?igshid=MzRlODBiNWFlZA%3D%3D';
    const telegramUrl = 'https://t.me/MichaelZaiets'
  return (
  
      <WrapperIconsList>
        <li>
          <LinkIcon to={instagramUrl} target="_blank">
            <InstagramIcon color="primary" />
          </LinkIcon>
        </li>
        <li>
        <LinkIcon to={telegramUrl} target="_blank">
          <TelegramIcon color="primary" />
        </LinkIcon>
        </li>
        <li>
            <LinkIcon to="tel:+380631690527" target="_blank">
              <LocalPhoneIcon color="primary" />
            </LinkIcon>
        </li>
      </WrapperIconsList>
  );
};
