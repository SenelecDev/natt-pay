import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import TontineCard from '../common/TontineCard';

const HomeTab = () => {
  const { 
    formattedDate, 
    userInfo, 
    tontines, 
    transactions, 
    categories,
    setShowDepositForm,
    setShowTransferForm
  } = useAppContext();

  const handleDepositClick = (e) => {
    e.stopPropagation();
    setShowDepositForm(true);
  };

  const handleTransferClick = (e) => {
    e.stopPropagation();
    setShowTransferForm(true);
  };

  return (
    <div className="p-4">
      {/* Date */}
      <div className="mb-4 text-gray-600">
        {formattedDate}
      </div>
      
      {/* Welcome Message */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Bonjour, {userInfo.name.split(' ')[0]}</h2>
        <p className="text-gray-600">Bienvenue sur votre espace tontine</p>
      </div>
      
      {/* Balance Card */}
      <div className="p-4 mb-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600">Solde disponible</p>
          <i className="text-gray-500 cursor-pointer fas fa-eye"></i>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-800">
          {userInfo.balance.toLocaleString('fr-FR')} FCFA
        </h3>
        <div className="flex justify-between">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer !rounded-button"
            onClick={handleDepositClick}
          >
            <i className="mr-2 fas fa-plus"></i>
            <span>Déposer</span>
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer !rounded-button"
            onClick={handleTransferClick}
          >
            <i className="mr-2 fas fa-arrow-right"></i>
            <span>Transférer</span>
          </button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold text-gray-800">Catégories</h3>
        <div className="grid grid-cols-5 gap-2">
          {categories.map(category => (
            <div key={category.id} className="flex flex-col items-center cursor-pointer">
              <div className="w-12 h-12 mb-1 overflow-hidden bg-white rounded-full shadow-sm">
                <img
                  src={category.image}
                  alt={category.nom}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="w-full overflow-hidden text-xs text-center text-gray-700 whitespace-nowrap text-overflow-ellipsis">
                {category.nom}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Active Tontines */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Mes Tontines</h3>
          <span className="text-sm text-orange-500 cursor-pointer">Voir tout</span>
        </div>
        <div className="space-y-4">
          {tontines.map(tontine => (
            <TontineCard key={tontine.id} tontine={tontine} />
          ))}
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Transactions récentes</h3>
          <span className="text-sm text-orange-500 cursor-pointer">Voir tout</span>
        </div>
        <div className="overflow-hidden bg-white shadow-sm rounded-xl">
          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`p-3 flex items-center justify-between ${
                index !== transactions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'Paiement' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  <i className={`fas ${
                    transaction.type === 'Paiement' ? 'fa-arrow-up text-red-500' : 'fa-arrow-down text-green-500'
                  }`}></i>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{transaction.type}</p>
                  <p className="text-xs text-gray-600">{transaction.tontine}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'Paiement' ? 'text-red-500' : 'text-green-500'
                }`}>
                  {transaction.type === 'Paiement' ? '-' : '+'}{transaction.montant.toLocaleString('fr-FR')} FCFA
                </p>
                <p className="text-xs text-gray-600">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;