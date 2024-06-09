import React, { useState } from 'react';
import Modal from "./modal";
import ContactForm from './contact';
import PrivacyPolicy from './privacy';
import TermsAndConditions from './terms';

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false); // state to control Modal visibility
  const [modalContent, setModalContent] = useState(null); // state to control Modal content

  return (
    <footer className="footer-section">
      <p> Copyright &copy; 2024 - Ray Inc. All rights reserved.</p>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false) }>
        { modalContent }
      </Modal>
      <ul>
        <li>
          <a 
            href="#legal"
            onClick={() => {setModalVisible(true); setModalContent(<TermsAndConditions />) }}
          >Terms & Conditions</a>
        </li>
        <li>
          <a 
            href="#privacy"
            onClick={() => {setModalVisible(true); setModalContent(<PrivacyPolicy />) }}
          >Privacy Policy</a>
        </li>
        <li>
          <a 
            href="#contact"
            onClick={() => {setModalVisible(true); setModalContent(<ContactForm />) }}
          >Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;