import React from 'react';

const MessagesTab = () => {
  // Données fictives pour les messages
  const messages = [
    {
      id: 1,
      sender: 'Système NattPay',
      avatar: null,
      content: 'Votre paiement pour la Tontine Familiale a été reçu. Merci !',
      date: 'Aujourd\'hui, 10:23',
      read: true,
      type: 'system'
    },
    {
      id: 2,
      sender: 'Amadou Diop',
      avatar: 'https://public.readdy.ai/ai/img_res/43c73575e7c4b5ff51211497b075556b.jpg',
      content: 'J\'ai effectué mon paiement pour ce mois. Peux-tu confirmer la réception ?',
      date: 'Hier, 15:45',
      read: true,
      type: 'user'
    },
    {
      id: 3,
      sender: 'Tontine Commerçants',
      avatar: null,
      content: 'Rappel : Le prochain paiement pour la Tontine Commerçants est prévu pour le 20 avril.',
      date: '3 avril, 09:12',
      read: false,
      type: 'group'
    },
    {
      id: 4,
      sender: 'Marie Sow',
      avatar: 'https://public.readdy.ai/ai/img_res/4e11d99611942c83959990fe20b12ffc.jpg',
      content: 'Bonjour Fatou, pourrais-tu m\'envoyer les détails de la nouvelle tontine dont tu m\'as parlé ?',
      date: '2 avril, 14:30',
      read: true,
      type: 'user'
    },
    {
      id: 5,
      sender: 'Système NattPay',
      avatar: null,
      content: 'Félicitations ! Vous avez reçu votre part de la Tontine Commerçants. 500 000 FCFA ont été crédités sur votre compte.',
      date: '25 mars, 16:08',
      read: true,
      type: 'system'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Messages</h2>
      
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="text-gray-400 fas fa-search"></i>
        </div>
        <input
          type="text"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Rechercher des messages..."
        />
      </div>
      
      {/* Filters */}
      <div className="flex pb-2 mb-4 overflow-x-auto hide-scrollbar">
        <button className="flex items-center px-4 py-1 mr-2 text-orange-800 bg-orange-100 rounded-full whitespace-nowrap">
          <i className="mr-2 fas fa-inbox"></i> Tous
        </button>
        <button className="flex items-center px-4 py-1 mr-2 text-gray-800 bg-gray-100 rounded-full whitespace-nowrap">
          <i className="mr-2 fas fa-user"></i> Directs
        </button>
        <button className="flex items-center px-4 py-1 mr-2 text-gray-800 bg-gray-100 rounded-full whitespace-nowrap">
          <i className="mr-2 fas fa-users"></i> Tontines
        </button>
        <button className="flex items-center px-4 py-1 mr-2 text-gray-800 bg-gray-100 rounded-full whitespace-nowrap">
          <i className="mr-2 fas fa-bell"></i> Notifications
        </button>
        <button className="flex items-center px-4 py-1 text-gray-800 bg-gray-100 rounded-full whitespace-nowrap">
          <i className="mr-2 fas fa-star"></i> Importants
        </button>
      </div>
      
      {/* Messages List */}
      <div className="overflow-hidden bg-white shadow-sm rounded-xl">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`p-4 flex items-start ${
              index !== messages.length - 1 ? 'border-b border-gray-100' : ''
            } ${!message.read ? 'bg-blue-50' : ''}`}
          >
            {/* Avatar */}
            <div className="mr-3">
              {message.avatar ? (
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  message.type === 'system' ? 'bg-purple-100' : 'bg-blue-100'
                }`}>
                  <i className={`fas ${
                    message.type === 'system' ? 'fa-cog text-purple-500' :
                    message.type === 'group' ? 'fa-users text-blue-500' : 'fa-user text-blue-500'
                  }`}></i>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-medium text-gray-800">{message.sender}</h4>
                <span className="text-xs text-gray-500">{message.date}</span>
              </div>
              <p className="mb-1 text-sm text-gray-600">{message.content}</p>
              <div className="flex items-center text-xs text-gray-500">
                {!message.read && (
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full mr-2">
                    Nouveau
                  </span>
                )}
                <div className="flex items-center">
                  <button className="mr-3 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-reply"></i>
                  </button>
                  <button className="mr-3 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-star"></i>
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* New Message Button */}
      <div className="fixed z-10 bottom-20 right-4">
        <button className="flex items-center justify-center bg-blue-500 rounded-full shadow-lg cursor-pointer w-14 h-14">
          <i className="text-xl text-white fas fa-pen"></i>
        </button>
      </div>
    </div>
  );
};

export default MessagesTab;