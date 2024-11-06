import React from 'react';
import WalletCard from '../wallet/WalletCard';
import QuickContacts from '../social/QuickContacts';

export default function RightPanel() {
  return (
    <div className="space-y-6">
      <WalletCard />
      <QuickContacts />
    </div>
  );
}