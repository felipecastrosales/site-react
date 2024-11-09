import { ReactComponent as GithubIcon } from '/src/assets/social-medias/github.svg';
import { ReactComponent as LinkedinIcon } from '/src/assets/social-medias/linkedin.svg';
import { ReactComponent as StackoverflowIcon } from '/src/assets/social-medias/stackoverflow.svg';
import { ReactComponent as DiscordIcon } from '/src/assets/social-medias/discord.svg';
import { ReactComponent as UdemyIcon } from '/src/assets/social-medias/udemy.svg';
import { ReactComponent as InstagramIcon } from '/src/assets/social-medias/instagram.svg';
import { ReactComponent as MediumIcon } from '/src/assets/social-medias/medium.svg';

const assetsFolder = '/src/assets';
const iconsFolder = `${assetsFolder}/icons`;
const socialMediasFolder = `${assetsFolder}/social-medias`;

const AppIcons = {
  /// icons
  menu: `${iconsFolder}/menu.svg`,

  /// social medias
  github: GithubIcon,
  linkedin: LinkedinIcon,
  stackoverflow: StackoverflowIcon,
  discord: DiscordIcon,
  udemy: UdemyIcon,
  instagram: InstagramIcon,
  medium: MediumIcon,
};

export default AppIcons;
