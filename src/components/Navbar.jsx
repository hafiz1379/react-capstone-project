import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  const { pathname } = location;
  let title;

  useEffect(() => {
    setShowButton(location.pathname !== '/');
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };
  if (pathname === '/') {
    title = 'Air Polution metric';
  } else if (pathname.startsWith('/') && pathname.split('/').length === 2) {
    title = 'Stats';
  }

  return (
    <header className="flex bg-blue_header p-2 justify-between">
      { showButton && (
      <button type="button" className="flex items-center text-xl" onClick={handleGoBack}>
        <img src="https://api.iconify.design/ic:sharp-arrow-back-ios.svg?color=%23ffffff" alt="back arrow" />
        2023
      </button>
      )}
      <h1 className="font-normal">{title}</h1>
      <div className="flex gap-3">
        <img className="h-6" src="https://api.iconify.design/carbon:microphone-filled.svg?color=%23ffffff" alt="speak" />
        <img className="h-6" src="https://api.iconify.design/clarity:settings-solid.svg?color=%23ffffff" alt="settings" />
      </div>
    </header>
  );
};
export default Navbar;
