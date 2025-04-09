import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const NewTontineForm = () => {
  const { categories, setShowNewTontineForm, handleCreateTontine } = useAppContext();
  
  const [formData, setFormData] = useState({
    nom: '',
    montant: '',
    participants: '',
    category: '',
    image: 'https://public.readdy.ai/ai/img_res/f31783b3a359b581e387757ace00acb9.jpg',
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
    
    // Transformation des données pour correspondre à la structure attendue
    const newTontine = {
      nom: formData.nom,
      montant: parseFloat(formData.montant),
      participants: parseInt(formData.participants, 10),
      category: parseInt(formData.category, 10),
      prochainPaiement: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      montantProchain: parseFloat(formData.montant) / parseInt(formData.participants, 10),
      image: formData.image
    };
    
    handleCreateTontine(newTontine);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-5 bg-white rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">Créer une nouvelle tontine</h3>
          <button onClick={() => setShowNewTontineForm(false)} className="text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Nom de la tontine</label>
            <input 
              type="text" 
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Ex: Tontine Familiale" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Montant total</label>
            <input 
              type="number" 
              name="montant"
              value={formData.montant}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Ex: 500000" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Nombre de participants</label>
            <input 
              type="number" 
              name="participants"
              value={formData.participants}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Ex: 10" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Catégorie</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nom}</option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg !rounded-button"
              onClick={() => setShowNewTontineForm(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg !rounded-button"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTontineForm;