// components/MyCheckboxForm.js

import React from 'react';
import { CheckBox } from '@rneui/base'; // Uygulamanın kullandığı CheckBox bileşenini import et

const MyCheckboxForm = ({ checkboxValue, onCheckboxChange }) => {
  return (
    <CheckBox
      title="Kişisel Verilerin Korunması Kanunų Aydıniatma
      Metni'ni okudum .ve bilgilendirildim.
      "
      checked={checkboxValue}
      onPress={() => {
        onCheckboxChange(!checkboxValue);
      }}
    />
    
  );
};

export default MyCheckboxForm;
