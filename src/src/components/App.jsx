// src/App.jsx
import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'; // Доданий імпорт
import data from './Statistics/data';
import user from './Profile/user';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions'; // Доданий імпорт

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Включаємо компонент Statistics */}
      <Statistics title="Статистика завантаження" stats={data} />

      {/* Включіть компонент FriendList */}
      <FriendList friends={friends} />

      {/* Включіть компонент TransactionHistory */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
