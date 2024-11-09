import './SocialMedias.css';
import socialLinks from './SocialMediasList';

enum SocialMediasIconLayout {
  Horizontal = 'horizontal-icons',
  VerticalWithName = 'vertical-icons-with-name',
}

interface SocialMediasProps {
  layout: SocialMediasIconLayout;
}

const SocialMedias = ({ layout }: SocialMediasProps) => {
  return (
    <div className={`social-icons ${layout}`}>
      {socialLinks.map(({ href, icon: Icon, alt }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <Icon className={`social-icon-${layout}`} />
          {layout === SocialMediasIconLayout.VerticalWithName && <span>{alt}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialMedias;

export { SocialMediasIconLayout };
