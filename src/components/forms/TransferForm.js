import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const TransferForm = () => {
  const { setShowTransferForm } = useAppContext();
  
  const [formData, setFormData] = useState({
    recipient: '',
    recipientType: '',
    amount: '',
    method: '',
    date: new Date().toISOString().split('T')[0],
    message: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives pour les contacts et tontines suggérés lors de la recherche
  const suggestedContacts = [
    {
      id: 1,
      name: 'Moussa Diallo',
      type: 'contact',
      image: 'https://public.readdy.ai/ai/img_res/43c73575e7c4b5ff51211497b075556b.jpg'
    },
    {
      id: 2,
      name: 'Aïcha Ndiaye',
      type: 'contact',
      image: 'https://public.readdy.ai/ai/img_res/4e11d99611942c83959990fe20b12ffc.jpg'
    },
    {
      id: 3,
      name: 'Tontine Familiale',
      type: 'tontine',
      image: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectRecipient = (contact) => {
    setFormData({
      ...formData,
      recipient: contact.id,
      recipientType: contact.type,
      recipientName: contact.name
    });
    setSearchTerm(contact.name);
  };

  const filteredContacts = suggestedContacts.filter(
    contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour effectuer un transfert
    setShowTransferForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-5 bg-white rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Transférer de l'argent</h3>
          <button onClick={() => setShowTransferForm(false)} className="text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Destinataire</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="text-gray-400 fas fa-search"></i>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Rechercher un contact ou une tontine..."
              />
            </div>
            {searchTerm && (
              <div className="mt-2 overflow-y-auto border border-gray-200 rounded-lg max-h-32">
                {filteredContacts.length > 0 ? (
                  filteredContacts.map(contact => (
                    <div
                      key={contact.id}
                      className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelectRecipient(contact)}
                    >
                      {contact.type === 'contact' ? (
                        <div className="w-8 h-8 mr-2 overflow-hidden rounded-full">
                          <img
                            src={contact.image}
                            alt={contact.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 mr-2 bg-orange-100 rounded-full">
                          <i className="text-orange-500 fas fa-users"></i>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.type === 'contact' ? 'Contact' : 'Tontine'}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-center text-gray-500">Aucun résultat trouvé</div>
                )}
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Montant à transférer</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">FCFA</span>
              </div>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-2 pl-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 25000"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Méthode de transfert</label>
            <select
              name="method"
              value={formData.method}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner une méthode</option>
              <option value="mobile">Mobile Money</option>
              <option value="bank">Virement bancaire</option>
              <option value="wallet">Portefeuille NattPay</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Date du transfert</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message (optionnel)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              placeholder="Ajouter un message pour le destinataire..."
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg !rounded-button"
              onClick={() => setShowTransferForm(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg !rounded-button"
            >
              Transférer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;