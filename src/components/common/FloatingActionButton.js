import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const FloatingActionButton = () => {
  const {
    fabMenuOpen,
    setFabMenuOpen,
    setShowNewTontineForm,
    setShowPaymentForm,
    setShowInviteForm,
    setShowReminderForm
  } = useAppContext();

  const handleFabClick = (e) => {
    e.stopPropagation();
    setFabMenuOpen(prev => !prev);
  };

  const handleMenuItemClick = (action) => {
    setFabMenuOpen(false);
    switch (action) {
      case 'newTontine':
        setShowNewTontineForm(true);
        break;
      case 'payment':
        setShowPaymentForm(true);
        break;
      case 'invite':
        setShowInviteForm(true);
        break;
      case 'reminder':
        setShowReminderForm(true);
        break;
      default:
        break;
    }
  };

  const menuItems = [
    {
      id: 'newTontine',
      label: 'Créer une nouvelle tontine',
      icon: 'fa-users',
      color: 'orange'
    },
    {
      id: 'payment',
      label: 'Effectuer un paiement',
      icon: 'fa-money-bill-wave',
      color: 'green'
    },
    {
      id: 'invite',
      label: 'Inviter des participants',
      icon: 'fa-user-plus',
      color: 'blue'
    },
    {
      id: 'reminder',
      label: 'Programmer un rappel',
      icon: 'fa-bell',
      color: 'purple'
    }
  ];

  return (
    <div className="fixed z-10 bottom-20 right-4">
      <div className="relative">
        <button
          className="bg-orange-500 w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer !rounded-button"
          onClick={handleFabClick}
        >
          <i className="text-xl text-white fas fa-plus"></i>
        </button>
        {fabMenuOpen && (
          <div className="absolute right-0 z-20 w-64 py-2 mb-2 bg-white rounded-lg shadow-xl bottom-16">
            {menuItems.map(item => (
              <button
                key={item.id}
                className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => handleMenuItemClick(item.id)}
              >
                <div className={
                  item.color === 'orange' ? 'w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3' :
                  item.color === 'green' ? 'w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3' :
                  item.color === 'blue' ? 'w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3' :
                  'w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3'
                }>
                  <i className={
                    item.color === 'orange' ? `fas ${item.icon} text-orange-500` :
                    item.color === 'green' ? `fas ${item.icon} text-green-500` :
                    item.color === 'blue' ? `fas ${item.icon} text-blue-500` :
                    `fas ${item.icon} text-purple-500`
                  }></i>
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingActionButton;