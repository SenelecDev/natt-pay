import React from 'react';
import { AppProvider } from './contexts/AppContext';
import NavBar from './components/common/NavBar';
import TabBar from './components/common/TabBar';
import FloatingActionButton from './components/common/FloatingActionButton';
import HomeTab from './components/tabs/HomeTab';
import TontinesTab from './components/tabs/TontinesTab';
import PaymentsTab from './components/tabs/PaymentsTab';
import MessagesTab from './components/tabs/MessagesTab';
import ProfileTab from './components/tabs/ProfileTab';
import NewTontineForm from './components/forms/NewTontineForm';
import PaymentForm from './components/forms/PaymentForm';
import InviteForm from './components/forms/InviteForm';
import ReminderForm from './components/forms/ReminderForm';
import DepositForm from './components/forms/DepositForm';
import TransferForm from './components/forms/TransferForm';
import PaymentConfirmationModal from './components/modals/PaymentConfirmationModal';
import { useAppContext } from './contexts/AppContext';

// Load FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const AppContent = () => {
  const {
    activeTab,
    handleGlobalClick,
    showNewTontineForm,
    showPaymentForm,
    showInviteForm,
    showReminderForm,
    showDepositForm,
    showTransferForm,
    showPaymentConfirmation
  } = useAppContext();

  return (
    <div className="relative min-h-screen pb-16 bg-gray-50" onClick={handleGlobalClick}>
      <NavBar />

      {/* Content Area with proper padding for fixed nav and tab bar */}
      <div className="pt-16 pb-16">
        {activeTab === 'accueil' && <HomeTab />}
        {activeTab === 'tontines' && <TontinesTab />}
        {activeTab === 'paiements' && <PaymentsTab />}
        {activeTab === 'messages' && <MessagesTab />}
        {activeTab === 'profil' && <ProfileTab />}
      </div>

      <FloatingActionButton />
      <TabBar />

      {/* Forms */}
      {showNewTontineForm && <NewTontineForm />}
      {showPaymentForm && <PaymentForm />}
      {showInviteForm && <InviteForm />}
      {showReminderForm && <ReminderForm />}
      {showDepositForm && <DepositForm />}
      {showTransferForm && <TransferForm />}
      {showPaymentConfirmation && <PaymentConfirmationModal />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;