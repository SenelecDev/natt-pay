import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const TabBar = () => {
  const { activeTab, setActiveTab } = useAppContext();

  const tabs = [
    { id: 'accueil', icon: 'fa-home', label: 'Accueil' },
    { id: 'tontines', icon: 'fa-money-bill-wave', label: 'Tontines' },
    { id: 'paiements', icon: 'fa-exchange-alt', label: 'Paiements' },
    { id: 'messages', icon: 'fa-comments', label: 'Messages' },
    { id: 'profil', icon: 'fa-user', label: 'Profil' }
  ];

  return (
    <div className="fixed bottom-0 z-10 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="grid h-16 grid-cols-5">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeTab === tab.id ? 'text-orange-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={`fas ${tab.icon} text-xl`}></i>
            <span className="mt-1 text-xs">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;