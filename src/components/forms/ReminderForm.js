import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ReminderForm = () => {
  const { tontines, setShowReminderForm } = useAppContext();
  
  const [formData, setFormData] = useState({
    tontine: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    repetition: 'none',
    note: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour programmer un rappel
    setShowReminderForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-5 bg-white rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Programmer un rappel</h3>
          <button onClick={() => setShowReminderForm(false)} className="text-gray-500">
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
            <label className="block mb-2 text-sm font-medium text-gray-700">Titre du rappel</label>
            <input 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ex: Paiement mensuel"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Date et heure</label>
            <div className="grid grid-cols-2 gap-2">
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input 
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Répétition</label>
            <select
              name="repetition"
              value={formData.repetition}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="none">Aucune</option>
              <option value="daily">Quotidienne</option>
              <option value="weekly">Hebdomadaire</option>
              <option value="monthly">Mensuelle</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={2}
              placeholder="Ajouter une note..."
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg !rounded-button"
              onClick={() => setShowReminderForm(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg !rounded-button"
            >
              Programmer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReminderForm;