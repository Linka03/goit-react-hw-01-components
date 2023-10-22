// src/components/FriendList/FriendList.jsx
import React from 'react';
import FriendListItem from './FriendListItem'; // Додайте імпорт FriendListItem
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
