import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SubmitButton.css';

const SubmitButton: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Suscrito con: ${email}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form className='custom-input-group' onSubmit={handleSubscribe}>
        <input
          type='email'
          className='custom-input'
          placeholder='Enter Your Email'
          value={email}
          onChange={handleChange}
          required
        />
        <button type='submit' className='custom-button'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubmitButton;
