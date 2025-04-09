import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const PaymentForm = () => {
  const { tontines, setShowPaymentForm, activeTab, handlePayment } = useAppContext();
  
  const defaultTontine = tontines.length > 0 ? tontines[0] : null;
  
  const [formData, setFormData] = useState({
    tontine: defaultTontine?.id.toString() || '',
    tontineName: defaultTontine?.nom || '',
    montant: defaultTontine?.montantProchain.toString() || '',
    date: new Date().toISOString().split('T')[0],
    methode: '',
    note: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Si le champ tontine change, mettre à jour également le montant prédéfini
    if (name === 'tontine') {
      const selectedTontine = tontines.find(t => t.id.toString() === value);
      setFormData({
        ...formData,
        tontine: value,
        tontineName: selectedTontine?.nom || '',
        montant: selectedTontine?.montantProchain.toString() || ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(formData);
    setShowPaymentForm(false);
  };

  return (                      
    <form onSubmit={handleSubmit} className="payment-form" style={{ display: activeTab === 'paiement' ? 'block' : 'none' }}>
      <label htmlFor="tontine">Tontine:</label>            
      <select id="tontine" name="tontine" value={formData.tontine} onChange={handleInputChange} className="form-input">
        {tontines.map(tontine => (
          <option key={tontine.id} value={tontine.id.toString()}>
            {tontine.nom}
          </option>
        ))}
      </select>
      <label htmlFor="tontineName">Nom de la tontine:</label>
      <input type="text" id="tontineName" name="tontineName" value={formData.tontineName} readOnly className="form-input" />
      <label htmlFor="montant">Montant:</label>
      <input type="text" id="montant" name="montant" value={formData.montant} readOnly className="form-input" />
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="form-input" />
      <label htmlFor="methode">Méthode:</label>
      <input type="text" id="methode" name="methode" value={formData.methode} onChange={handleInputChange} className="form-input" />
      <label htmlFor="note">Note:</label>
      <input type="text" id="note" name="note" value={formData.note} onChange={handleInputChange} className="form-input" />
      <button type="submit" className="form-button">Confirmer le paiement</button>
    </form>    
  );    
};

export default PaymentForm;