import React from 'react';
import Dropdown from '../components/DropDown/DropDown';
import ImageUpload from '../components/ImageUpload/ImageUpload';

export default function Admin() {
  const weddingOptions = [
    { label: 'Weddings' },
    { label: 'Portraits' },
  ];

  return (
    <div>
      <ImageUpload />
      <Dropdown
        optionsList={weddingOptions}
        placeholder="Select option"
        onChange={(val) => console.log(val)}
      />
    </div>
  );
}
