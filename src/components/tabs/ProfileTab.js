import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ProfileTab = () => {
  const { userInfo } = useAppContext();
  
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Profil</h2>
      
      {/* Profile Header */}
      <div className="p-5 mb-6 bg-white shadow-sm rounded-xl">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-4 overflow-hidden border-4 border-orange-100 rounded-full">
            <img
              src={userInfo.avatar}
              alt={userInfo.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mb-1 text-xl font-bold text-gray-800">{userInfo.name}</h3>
          <p className="mb-4 text-gray-600">{userInfo.email}</p>
          <button className="w-full max-w-xs px-4 py-2 mb-2 text-white bg-orange-500 rounded-lg">
            Modifier le profil
          </button>
        </div>
      </div>
      
      {/* Account Details */}
      <div className="p-5 mb-6 bg-white shadow-sm rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Informations du compte</h3>
        
        <div className="space-y-4">
          <div>
            <p className="mb-1 text-sm text-gray-500">Nom complet</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-800">{userInfo.name}</p>
              <i className="text-gray-400 cursor-pointer fas fa-pen"></i>
            </div>
          </div>
          
          <div>
            <p className="mb-1 text-sm text-gray-500">Adresse e-mail</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-800">{userInfo.email}</p>
              <i className="text-gray-400 cursor-pointer fas fa-pen"></i>
            </div>
          </div>
          
          <div>
            <p className="mb-1 text-sm text-gray-500">Numéro de téléphone</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-800">+221 77 123 45 67</p>
              <i className="text-gray-400 cursor-pointer fas fa-pen"></i>
            </div>
          </div>
          
          <div>
            <p className="mb-1 text-sm text-gray-500">Adresse</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-800">Dakar, Sénégal</p>
              <i className="text-gray-400 cursor-pointer fas fa-pen"></i>
            </div>
          </div>
          
          <div>
            <p className="mb-1 text-sm text-gray-500">Date de naissance</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-800">15/08/1985</p>
              <i className="text-gray-400 cursor-pointer fas fa-pen"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div className="p-5 mb-6 bg-white shadow-sm rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Moyens de paiement</h3>
          <button className="text-sm text-orange-500">
            <i className="mr-1 fas fa-plus"></i> Ajouter
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 mr-3 bg-orange-100 rounded-full">
              <i className="text-orange-500 fas fa-mobile-alt"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Orange Money</p>
              <p className="text-sm text-gray-500">**** 4567</p>
            </div>
            <div className="flex items-center">
              <span className="px-2 py-1 mr-2 text-xs text-green-800 bg-green-100 rounded-full">
                Par défaut
              </span>
              <i className="text-gray-400 cursor-pointer fas fa-ellipsis-v"></i>
            </div>
          </div>
          
          <div className="flex items-center p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 mr-3 bg-blue-100 rounded-full">
              <i className="text-blue-500 fas fa-credit-card"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Carte bancaire</p>
              <p className="text-sm text-gray-500">**** **** **** 8912</p>
            </div>
            <div>
              <i className="text-gray-400 cursor-pointer fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Security Settings */}
      <div className="p-5 mb-6 bg-white shadow-sm rounded-xl">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Sécurité</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Changer le mot de passe</p>
              <p className="text-sm text-gray-500">Dernière modification: il y a 3 mois</p>
            </div>
            <i className="text-gray-400 fas fa-chevron-right"></i>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Authentification à deux facteurs</p>
              <p className="text-sm text-gray-500">Sécurisez davantage votre compte</p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                className="w-0 h-0 opacity-0"
                id="toggle-2fa"
              />
              <label
                htmlFor="toggle-2fa"
                className="absolute top-0 bottom-0 left-0 right-0 bg-gray-300 rounded-full cursor-pointer slider"
              >
                <span className="absolute w-4 h-4 transition-transform bg-white rounded-full dot bottom-1 left-1"></span>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Questions de sécurité</p>
              <p className="text-sm text-gray-500">Configurer des questions pour récupérer votre compte</p>
            </div>
            <i className="text-gray-400 fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      
      {/* Logout and Danger Zone */}
      <div className="space-y-4">
        <button className="flex items-center justify-center w-full p-3 text-white bg-red-500 rounded-lg">
          <i className="mr-2 fas fa-sign-out-alt"></i>
          Déconnexion
        </button>
        
        <button className="flex items-center justify-center w-full p-3 text-red-500 border border-red-500 rounded-lg">
          <i className="mr-2 fas fa-trash-alt"></i>
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;