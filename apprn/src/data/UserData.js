import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://10.10.0.217:8081/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return userData; 
};

export default UserData;
