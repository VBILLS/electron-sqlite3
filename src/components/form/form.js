import React from 'react';

import db from '../../data/knexconfig.js';

function createUser = ({ name, email }) => {
  db('users').insert({name, email})
}

function DelRem() {
  return (
    <form>
      <label htmlFor='DelRem'>RemId</label>
      <input type='text' name='DelRem' placeholder='Enter Rem Id' />
      <button type='submit'>Delete Rem</button>
    </form>
  );
}

export default DelRem;
