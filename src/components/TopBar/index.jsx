// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import models from '../../modelData/models';
// import { AppBar, Toolbar, Typography } from "@mui/material";

// const TopBar = () => {
//   const { pathname } = useLocation();

//   let context = '';
//   if (pathname.includes('/user')) {
//     const userId = pathname.split('/').pop();
//     const user = models.userModel(userId);
//     context = user ? `Details of ${user.first_name} ${user.last_name}` : '';
//   } else if (pathname.includes('/photos')) {
//     const userId = pathname.split('/')[2];
//     const user = models.userModel(userId);
//     context = user ? `Photos of ${user.first_name} ${user.last_name}` : '';
//   }

//   return (
//     <AppBar className="topbar-appBar" position="absolute">
//       <Toolbar>
//         <Typography variant="h5" color="inherit">
//           Ngô Thế Quang Tiến - B21DCCN705{context}:
//         </Typography>

            
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopBar;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import models from '../../modelData/models';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TopBar = ({ auth, setAuth }) => {
  const { pathname } = useLocation();
  const [context, setContext] = useState('');

  useEffect(() => {
    let newContext = '';
    if (pathname.includes('/user')) {
      const userId = pathname.split('/').pop();
      const user = models.userModel(userId);
      newContext = user ? `Details of ${user.first_name} ${user.last_name}` : '';
    } else if (pathname.includes('/photos')) {
      const userId = pathname.split('/')[2];
      const user = models.userModel(userId);
      newContext = user ? `Photos of ${user.first_name} ${user.last_name}` : '';
    }
    setContext(newContext);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({ loggedIn: false, user: null });
  };

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" color="inherit">
          Ngô Thế Quang Tiến - B21DCCN705{context}:
        </Typography>
        {auth.loggedIn && (
          <Button
            className="logout-button"
            color="inherit"
            onClick={handleLogout}
            style={{ backgroundColor: 'white', border: '1px solid black', color: 'black' }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

