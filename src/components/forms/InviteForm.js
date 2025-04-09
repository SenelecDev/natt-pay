import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const InviteForm = () => {
  const { tontines, setShowInviteForm } = useAppContext();
  
  const defaultTontine = tontines.length > 0 ? tontines[0] : null;
  
  const [formData, setFormData] = useState({
    tontine: defaultTontine?.id.toString() || '',
    contacts: ['Amadou Diop', 'Marie Sow'],
    message: `Bonjour, je vous invite à rejoindre ma tontine "${defaultTontine?.nom || ''}" sur NattPay. Rejoignez-nous pour participer à cette épargne collective !`
  });

  const [selectedMethod, setSelectedMethod] = useState('email');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'tontine') {
      const selectedTontine = tontines.find(t => t.id.toString() === value);
      setFormData({
        ...formData,
        tontine: value,
        message: `Bonjour, je vous invite à rejoindre ma tontine "${selectedTontine?.nom || ''}" sur NattPay. Rejoignez-nous pour participer à cette épargne collective !`
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const removeContact = (index) => {
    const updatedContacts = [...formData.contacts];
    updatedContacts.splice(index, 1);
    setFormData({
      ...formData,
      contacts: updatedContacts
    });
  };

  const addContact = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setFormData({
        ...formData,
        contacts: [...formData.contacts, e.target.value.trim()]
      });
      e.target.value = '';
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les invitations
    setShowInviteForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-5 bg-white rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Inviter des participants</h3>
          <button onClick={() => setShowInviteForm(false)} className="text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Tontine</label>
            <select
              name="tontine"
              value={formData.tontine}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Sélectionner une tontine</option>
              {tontines.map(tontine => (
                <option key={tontine.id} value={tontine.id}>{tontine.nom}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Contacts</label>
            <div className="p-2 mb-2 border border-gray-300 rounded-lg">
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.contacts.map((contact, index) => (
                  <div key={index} className="flex items-center px-2 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                    {contact} 
                    <i 
                      className="ml-1 cursor-pointer fas fa-times" 
                      onClick={() => removeContact(index)}
                    ></i>
                  </div>
                ))}
              </div>
              <input 
                type="text" 
                className="w-full p-1 focus:outline-none" 
                placeholder="Ajouter un contact..." 
                onKeyPress={addContact}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Méthode d'invitation</label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                className={`flex-1 ${selectedMethod === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-3 py-2 rounded-lg text-sm flex items-center justify-center !rounded-button`}
                onClick={() => setSelectedMethod('email')}
              >
                <i className="mr-1 fas fa-envelope"></i> Email
              </button>
              <button
                type="button"
                className={`flex-1 ${selectedMethod === 'whatsapp' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} px-3 py-2 rounded-lg text-sm flex items-center justify-center !rounded-button`}
                onClick={() => setSelectedMethod('whatsapp')}
              >
                <i className="mr-1 fab fa-whatsapp"></i> WhatsApp
              </button>
              <button
                type="button"
                className={`flex-1 ${selectedMethod === 'sms' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'} px-3 py-2 rounded-lg text-sm flex items-center justify-center !rounded-button`}
                onClick={() => setSelectedMethod('sms')}
              >
                <i className="mr-1 fas fa-sms"></i> SMS
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message d'invitation</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
              placeholder="Écrivez un message personnalisé..."
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg !rounded-button"
              onClick={() => setShowInviteForm(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg !rounded-button"
            >
              Inviter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteForm;