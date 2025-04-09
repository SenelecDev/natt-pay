import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import TontineCard from '../common/TontineCard';

const TontinesTab = () => {
  const { tontines, categories, setShowNewTontineForm } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleNewTontineClick = (e) => {
    e.stopPropagation();
    setShowNewTontineForm(true);
  };

  const filteredTontines = tontines.filter(tontine => {
    const matchesSearch = tontine.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tontine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Mes Tontines</h2>
        <button
          className="bg-orange-500 text-white px-3 py-2 rounded-lg flex items-center text-sm !rounded-button"
          onClick={handleNewTontineClick}
        >
          <i className="mr-2 fas fa-plus"></i>
          <span>Nouvelle tontine</span>
        </button>
      </div>
      
      {/* Filtres et tri */}
      <div className="p-3 mb-4 bg-white shadow-sm rounded-xl">
        <div className="flex items-center mb-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="text-gray-400 fas fa-search"></i>
            </div>
            <input
              type="text"
              className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Rechercher une tontine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="ml-2">
            <button className="p-2 text-gray-500 hover:text-orange-500">
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div 
            className={`${selectedCategory === 'all' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full text-xs flex items-center cursor-pointer`}
            onClick={() => setSelectedCategory('all')}
          >
            Toutes {selectedCategory === 'all' && <i className="ml-2 cursor-pointer fas fa-times"></i>}
          </div>
          {categories.map(category => (
            <div 
              key={category.id}
              className={`${selectedCategory === category.id ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full text-xs flex items-center cursor-pointer`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.nom}
            </div>
          ))}
        </div>
      </div>
      
      {/* Tontines actives */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold text-gray-800">Tontines actives</h3>
        {filteredTontines.length > 0 ? (
          <div className="space-y-4">
            {filteredTontines.map(tontine => (
              <TontineCard key={tontine.id} tontine={tontine} showActions={true} />
            ))}
          </div>
        ) : (
          <div className="p-6 text-center bg-white rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="text-2xl text-gray-400 fas fa-search"></i>
            </div>
            <h4 className="mb-2 text-lg font-medium text-gray-800">Aucune tontine trouvée</h4>
            <p className="text-gray-600">Essayez de modifier vos filtres ou créez une nouvelle tontine.</p>
          </div>
        )}
      </div>
      
      {/* Tontines archivées */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Tontines archivées</h3>
          <a href="#" className="flex items-center text-sm text-orange-500 cursor-pointer">
            <i className="mr-1 fas fa-archive"></i>
            Voir tout
          </a>
        </div>
        <div className="overflow-hidden bg-white shadow-sm rounded-xl">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-3 bg-gray-100 rounded-full">
                  <i className="text-gray-500 fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Tontine Mariage</h4>
                  <p className="text-xs text-gray-500">Terminée le 10 mars 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">1 000 000 FCFA</p>
                <p className="text-xs text-green-500">100% complétée</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-3 bg-gray-100 rounded-full">
                  <i className="text-gray-500 fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Tontine Voiture</h4>
                  <p className="text-xs text-gray-500">Terminée le 5 février 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">2 500 000 FCFA</p>
                <p className="text-xs text-green-500">100% complétée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistiques */}
      <div className="p-4 mt-6 bg-white shadow-sm rounded-xl">
        <h3 className="mb-3 text-lg font-semibold text-gray-800">Statistiques</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-lg bg-orange-50">
            <p className="mb-1 text-xs text-gray-600">Total des tontines actives</p>
            <p className="text-xl font-bold text-gray-800">{tontines.length}</p>
          </div>
          <div className="p-3 rounded-lg bg-blue-50">
            <p className="mb-1 text-xs text-gray-600">Montant total engagé</p>
            <p className="text-xl font-bold text-gray-800">850 000 FCFA</p>
          </div>
          <div className="p-3 rounded-lg bg-green-50">
            <p className="mb-1 text-xs text-gray-600">Montant total reçu</p>
            <p className="text-xl font-bold text-gray-800">500 000 FCFA</p>
          </div>
          <div className="p-3 rounded-lg bg-purple-50">
            <p className="mb-1 text-xs text-gray-600">Prochains paiements</p>
            <p className="text-xl font-bold text-gray-800">85 000 FCFA</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center text-sm text-orange-500">
            <i className="mr-1 fas fa-chart-bar"></i>
            Voir les rapports détaillés
          </button>
        </div>
      </div>
    </div>
  );
};

export default TontinesTab;