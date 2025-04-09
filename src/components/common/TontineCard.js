import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const TontineCard = ({ tontine, showActions = false }) => {
  const { setShowPaymentForm, setShowInviteForm } = useAppContext();

  const handlePaymentClick = (e) => {
    e.stopPropagation();
    setShowPaymentForm(true);
  };

  const handleInviteClick = (e) => {
    e.stopPropagation();
    setShowInviteForm(true);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    const menuElement = e.currentTarget.nextElementSibling;
    if (menuElement) {
      menuElement.classList.toggle('hidden');
    }
  };

  return (
    <div className="overflow-hidden bg-white shadow-sm cursor-pointer rounded-xl">
      <div className="w-full h-32 overflow-hidden">
        <img
          src={tontine.image}
          alt={tontine.nom}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-800">{tontine.nom}</h4>
          <span className="text-sm text-gray-600">{tontine.participants} membres</span>
        </div>
        <div className="mb-2">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-600">Progression</span>
            <span className="text-gray-800">{tontine.progression}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: `${tontine.progression}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 text-sm">
          <div>
            <p className="text-gray-600">Prochain paiement</p>
            <p className="font-medium text-gray-800">{tontine.prochainPaiement}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Montant</p>
            <p className="font-medium text-gray-800">{tontine.montantProchain.toLocaleString('fr-FR')} FCFA</p>
          </div>
        </div>
        
        {showActions && (
          <div className="flex justify-between gap-2">
            <button
              className="flex-1 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center !rounded-button"
              onClick={handlePaymentClick}
            >
              <i className="mr-1 fas fa-money-bill-wave"></i>
              Payer
            </button>
            <button
              className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center !rounded-button"
              onClick={handleInviteClick}
            >
              <i className="mr-1 fas fa-user-plus"></i>
              Inviter
            </button>
            <div className="relative">
              <button
                className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm !rounded-button"
                onClick={handleMenuClick}
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <div className="absolute right-0 z-20 hidden w-56 py-1 mt-2 bg-white rounded-lg shadow-lg">
                <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                  <i className="mr-3 text-gray-500 fas fa-eye"></i>
                  Voir détails
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                  <i className="mr-3 text-gray-500 fas fa-edit"></i>
                  Modifier la tontine
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                  <i className="mr-3 text-gray-500 fas fa-bell"></i>
                  Envoyer un rappel aux membres
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                  <i className="mr-3 text-gray-500 fas fa-file-export"></i>
                  Exporter les données
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                  <i className="mr-3 text-gray-500 fas fa-history"></i>
                  Voir l'historique des paiements
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                >
                  <i className="mr-3 text-red-500 fas fa-trash-alt"></i>
                  Supprimer la tontine
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TontineCard;