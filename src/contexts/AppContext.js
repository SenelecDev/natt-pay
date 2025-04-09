import React, { createContext, useState, useContext } from 'react';
import tontinesData from '../data/tontines';
import transactionsData from '../data/transactions';
import categoriesData from '../data/categories';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('accueil');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [fabMenuOpen, setFabMenuOpen] = useState(false);
  
  // Forms state
  const [showNewTontineForm, setShowNewTontineForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);
  
  // Data state
  const [tontines, setTontines] = useState(tontinesData);
  const [transactions, setTransactions] = useState(transactionsData);
  const [categories, setCategories] = useState(categoriesData);
  
  // User information
  const userInfo = {
    name: "Fatou Diallo",
    email: "fatou.diallo@example.com",
    balance: 350000,
    avatar: "https://public.readdy.ai/ai/img_res/5f94ab93830b40e3bd8fe2da184334b1.jpg"
  };

  // Functions to handle forms
  const handleCreateTontine = (newTontine) => {
    const tontineWithId = {
      ...newTontine,
      id: tontines.length + 1,
      progression: 0,
    };
    setTontines([...tontines, tontineWithId]);
    setShowNewTontineForm(false);
  };

  const handlePayment = (paymentData) => {
    const newTransaction = {
      id: transactions.length + 1,
      type: "Paiement",
      tontine: paymentData.tontineName,
      montant: parseFloat(paymentData.amount),
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      statut: "Complété"
    };
    
    setTransactions([...transactions, newTransaction]);
    setShowPaymentConfirmation(true);
    setShowPaymentForm(false);
  };

  // Format date
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(currentDate);

  // Global click handler to close menus
  const handleGlobalClick = () => {
    setProfileMenuOpen(false);
    setFabMenuOpen(false);
  };

  const value = {
    activeTab,
    setActiveTab,
    profileMenuOpen,
    setProfileMenuOpen,
    fabMenuOpen,
    setFabMenuOpen,
    showNewTontineForm,
    setShowNewTontineForm,
    showPaymentForm,
    setShowPaymentForm,
    showInviteForm,
    setShowInviteForm,
    showReminderForm,
    setShowReminderForm,
    showDepositForm,
    setShowDepositForm,
    showTransferForm,
    setShowTransferForm,
    showPaymentConfirmation,
    setShowPaymentConfirmation,
    tontines,
    transactions,
    categories,
    userInfo,
    formattedDate,
    handleGlobalClick,
    handleCreateTontine,
    handlePayment
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;