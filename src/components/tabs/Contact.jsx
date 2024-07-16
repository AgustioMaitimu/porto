import React from 'react';
import Tweet from './tweets/Tweet';
import ContactInfo from './tweets/contact/ContactInfo';

function Contact() {
  return (
    <div className="flex flex-col text-white">
      <ContactInfo />
    </div>
  );
}

export default Contact;
