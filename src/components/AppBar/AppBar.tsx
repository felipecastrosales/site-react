import './AppBar.css';

import SocialMedias from '../SocialMedias/SocialMedias';

const AppBar = () => {
  return (
    <div className="appbar-container">
      <div className="appbar-content">
        <div className="appbar-name">Felipe Sales</div>
        <SocialMedias />
      </div>
    </div>
  );
};

export default AppBar;
