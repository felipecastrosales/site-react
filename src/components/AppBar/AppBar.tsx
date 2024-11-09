import './AppBar.css';
import SocialMedias, { SocialMediasIconLayout } from '../SocialMedias/SocialMedias';
import { useState, useEffect } from 'react';
import DrawerComponent from './drawer/DrawerComponent';

const AppBar = () => {
  const [showSocialMedias, setShowSocialMedias] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setShowSocialMedias(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="appbar-container">
      <div className="appbar-content">
        <div className="appbar-name">Felipe Sales</div>
        {showSocialMedias ? (
          <SocialMedias layout={SocialMediasIconLayout.Horizontal} />
        ) : (
          <DrawerComponent />
        )}
      </div>
    </div>
  );
};

export default AppBar;
