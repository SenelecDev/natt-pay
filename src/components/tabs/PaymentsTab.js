import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const PaymentsTab = () => {
  const { transactions, setShowPaymentForm } = useAppContext();
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const handleNewPaymentClick = (e) => {
    e.stopPropagation();
    setShowPaymentForm(true);
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'in') return transaction.type === 'Réception';
    if (activeFilter === 'out') return transaction.type === 'Paiement';
    return true;
  });

  // Sort transactions based on selected criteria
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date.split(' ').reverse().join('-')) - 
             new Date(a.date.split(' ').reverse().join('-'));
    }
    if (sortBy === 'amount') {
      return b.montant - a.montant;
    }
    return 0;
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Paiements</h2>
        <button
          className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center text-sm !rounded-button"
          onClick={handleNewPaymentClick}
        >
          <i className="mr-2 fas fa-plus"></i>
          <span>Nouveau paiement</span>
        </button>
      </div>

      {/* Filter and Sort Controls */}
      <div className="p-3 mb-4 bg-white shadow-sm rounded-xl">
        <div className="flex flex-wrap gap-2 mb-3">
          <button 
            className={`px-3 py-1 rounded-full text-sm ${activeFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setActiveFilter('all')}
          >
            Toutes
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${activeFilter === 'in' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setActiveFilter('in')}
          >
            Réceptions
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${activeFilter === 'out' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setActiveFilter('out')}
          >
            Paiements
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {sortedTransactions.length} transactions
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Trier par:</span>
            <select 
              className="p-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="amount">Montant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="mb-6 overflow-hidden bg-white shadow-sm rounded-xl">
        {sortedTransactions.length > 0 ? (
          sortedTransactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`p-4 flex items-center justify-between ${
                index !== sortedTransactions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === 'Paiement' ? 'bg-red-100' : 'bg-green-100'
                  }`}
                >
                  <i 
                    className={`fas ${
                      transaction.type === 'Paiement' ? 'fa-arrow-up text-red-500' : 'fa-arrow-down text-green-500'
                    } text-xl`}
                  ></i>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">{transaction.type}</p>
                  <p className="text-sm text-gray-600">{transaction.tontine}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p 
                  className={`text-lg font-medium ${
                    transaction.type === 'Paiement' ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {transaction.type === 'Paiement' ? '-' : '+'}{transaction.montant.toLocaleString('fr-FR')} FCFA
                </p>
                <span 
                  className={`text-xs px-2 py-1 rounded-full ${
                    transaction.statut === 'Complété' 
                      ? 'bg-green-100 text-green-800' 
                      : transaction.statut === 'En attente'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.statut}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="text-2xl text-gray-400 fas fa-exchange-alt"></i>
            </div>
            <h4 className="mb-2 text-lg font-medium text-gray-800">Aucune transaction trouvée</h4>
            <p className="mb-4 text-gray-600">Il n'y a pas encore de transactions correspondant à vos critères.</p>
            <button
              className="inline-flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-lg"
              onClick={handleNewPaymentClick}
            >
              <i className="mr-2 fas fa-plus"></i>
              Effectuer un paiement
            </button>
          </div>
        )}
      </div>
      
      {/* Monthly Summary */}
      <div className="p-4 bg-white shadow-sm rounded-xl">
        <h3 className="mb-3 text-lg font-semibold text-gray-800">Résumé du mois</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-lg bg-green-50">
            <p className="mb-1 text-xs text-gray-600">Total reçu</p>
            <p className="text-xl font-bold text-green-600">+500 000 FCFA</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50">
            <p className="mb-1 text-xs text-gray-600">Total payé</p>
            <p className="text-xl font-bold text-red-600">-35 000 FCFA</p>
          </div>
        </div>
        <div className="pt-4 mt-4 border-t border-gray-100">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Solde du mois</span>
            <span className="font-bold text-green-600">+465 000 FCFA</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTab;