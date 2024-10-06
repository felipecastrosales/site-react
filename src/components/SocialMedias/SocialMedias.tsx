import './SocialMedias.css';

import AppIcons from '../../core/constants/AppIcons';

const socialLinks = [
  { 
    href: 'https://github.com/felipecastrosales', 
    icon: AppIcons.github, 
    alt: 'GitHub',
  },
  { 
    href: 'https://linkedin.com/in/felipecastrosales', 
    icon: AppIcons.linkedin, 
    alt: 'LinkedIn',
  },
  { 
    href: 'https://stackoverflow.com/users/13096514/felipe-sales', 
    icon: AppIcons.stackoverflow, 
    alt: 'Stack Overflow',
  },
  { 
    href: 'https://discord.com/users/406074089011281921', 
    icon: AppIcons.discord, 
    alt: 'Discord',
  },
  { 
    href: 'https://www.udemy.com/user/luis-felipe-de-castro-sales/', 
    icon: AppIcons.udemy, 
    alt: 'Udemy',
  },
  { 
    href: 'https://www.instagram.com/felipecastrosales', 
    icon: AppIcons.instagram, 
    alt: 'Instagram',
  },
  { 
    href: 'https://medium.com/@felipecastrosales', 
    icon: AppIcons.medium, 
    alt: 'Medium',
  },
];

const SocialMedias = () => {
  return (
    <div className="social-icons">
      {socialLinks.map(({ href, icon, alt }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} height="24" width="24" />
        </a>
      ))}
    </div>
  );
}

export default SocialMedias;