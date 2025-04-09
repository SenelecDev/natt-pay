import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const PaymentConfirmationModal = () => {
  const { setShowPaymentConfirmation } = useAppContext();
  
  // Générer un numéro de référence de paiement aléatoire
  const generateReference = () => {
    return `PAY-${Math.floor(Math.random() * 90000000) + 10000000}`;
  };

  const paymentDetails = {
    tontine: 'Tontine Familiale',
    amount: 25000,
    date: new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    reference: generateReference()
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-5 bg-white rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
            <i className="text-2xl text-green-500 fas fa-check"></i>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-800">Paiement réussi !</h3>
          <p className="mb-4 text-center text-gray-600">
            Votre paiement a été effectué avec succès. Un reçu a été envoyé à votre adresse email.
          </p>
          <div className="w-full p-4 mb-4 rounded-lg bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tontine:</span>
              <span className="font-medium text-gray-800">{paymentDetails.tontine}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Montant:</span>
              <span className="font-medium text-gray-800">{paymentDetails.amount.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-gray-800">{paymentDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Référence:</span>
              <span className="font-medium text-gray-800">{paymentDetails.reference}</span>
            </div>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium !rounded-button"
            onClick={() => setShowPaymentConfirmation(false)}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;