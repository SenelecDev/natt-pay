import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const { userInfo, profileMenuOpen, setProfileMenuOpen } = useAppContext();

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setProfileMenuOpen(prev => !prev);
  };

  return (
    <div className="fixed top-0 z-10 w-full text-white shadow-md bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <i className="mr-2 text-xl fas fa-money-bill-wave"></i>
          <h1 className="text-lg font-bold">NattPay</h1>
        </div>
        <div className="flex items-center">
          <i className="mr-4 text-xl cursor-pointer fas fa-bell"></i>
          <div className="relative">
            <div
              className="w-8 h-8 overflow-hidden border-2 border-white rounded-full cursor-pointer"
              onClick={handleProfileClick}
            >
              <img
                src={userInfo.avatar}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            {profileMenuOpen && <ProfileMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;