import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ProfileMenu = () => {
  const { userInfo } = useAppContext();

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="absolute right-0 z-20 w-56 py-1 mt-2 bg-white rounded-lg shadow-lg" onClick={handleMenuClick}>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-800">{userInfo.name}</p>
        <p className="text-xs text-gray-500">{userInfo.email}</p>
      </div>
      <div className="py-1">
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
          <i className="mr-3 text-gray-500 fas fa-user-circle"></i>
          Mon profil
        </button>
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
          <i className="mr-3 text-gray-500 fas fa-cog"></i>
          Paramètres du compte
        </button>
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
          <i className="mr-3 text-gray-500 fas fa-bell"></i>
          Préférences de notification
        </button>
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
          <i className="mr-3 text-gray-500 fas fa-question-circle"></i>
          Aide et support
        </button>
      </div>
      <div className="py-1 border-t border-gray-100">
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100">
          <i className="mr-3 fas fa-sign-out-alt"></i>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;