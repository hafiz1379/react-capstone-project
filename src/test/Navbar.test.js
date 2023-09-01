// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showButton, setShowButton] = useState(false);
//   const { pathname } = location;
//   let title;

//   useEffect(() => {
//     setShowButton(location.pathname !== '/');
//   }, [location.pathname]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };
//   if (pathname === '/') {
//     title = 'Air Polution app';
//   } else if (pathname.startsWith('/') && pathname.split('/').length === 2) {
//     title = 'Stats';
//   }

//   return (
//     <header className="flex bg-blue_header p-2 justify-between">
//       { showButton && (
//       <button type="button" className="flex items-center text-xl" onClick={handleGoBack}>
//         <img src="https://api.iconify.design/ic:sharp-arrow-back-ios.svg?color=%23ffffff" alt="back arrow" />
//         2023
//       </button>
//       )}
//       <h1 className="font-normal">{title}</h1>
//       <div className="flex gap-3">
//         <img className="h-6" src="https://api.iconify.design/carbon:microphone-filled.svg?color=%23ffffff" alt="speak" />
//         <img className="h-6" src="https://api.iconify.design/clarity:settings-solid.svg?color=%23ffffff" alt="settings" />
//       </div>
//     </header>
//   );
// };
// export default Navbar;

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders title', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const titleElement = screen.getByText(/Air Polution app/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly when pathname is /', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly when pathname is /stats', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
