/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import FormError from '../FormError/FormError';
import Icon from '../Icon/Icon';
import './dropdown.css';

export default function DropDown({
  optionsList = [],
  value,
  placeholder,
  onChange,
  isError,
  errorMessage,
  label = '',
  ...rest
}) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const setUpdatedSelection = (index) => {
    setSelectedOption(index);
    onChange(optionsList[index]);
  };
  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        const selectedIndexUp = selectedOption - 1 >= 0
          ? selectedOption - 1 : optionsList.length - 1;
        setUpdatedSelection(selectedIndexUp);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const selectedIndexDown = selectedOption
        === optionsList.length - 1 ? 0 : selectedOption + 1;
        setUpdatedSelection(selectedIndexDown);
        break;
      default:
        break;
    }
  };

  const selectedValueObject = optionsList[selectedOption] || '';
  useEffect(() => {
    const preSelectedIndex = optionsList.findIndex(
      (listObject) => listObject.value === value,
    );
    setSelectedOption(preSelectedIndex);
  }, [value]);

  return (
    <div className="wrapper" {...rest}>
      <label className="dropdown-label" htmlFor={rest.name}>
        {label}
      </label>
      <div
        className="drodown-container"
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={`${isOptionsOpen ? 'expanded' : ''} ${
            isError ? 'error' : ''
          } dropdown-btn`}
        >
          {selectedOption < 0 ? (
            <span className="placeholder">{placeholder}</span>
          ) : (
            <span>{selectedValueObject.label}</span>
          )}
          {isOptionsOpen ? (
            <Icon fill="#454545" name="TriangleUp" size="16" stroke="#454545" />
          ) : (
            <Icon
              fill="#454545"
              name="TriangleDown"
              size="16"
              stroke="#454545"
            />
          )}
        </button>
      </div>

      <ul
        className={`options ${isOptionsOpen ? 'show' : ''} dropdown-list`}
        role="listbox"
        aria-activedescendant={selectedValueObject.label}
        tabIndex={-1}
        onKeyDown={handleListKeyDown}
      >
        {optionsList.map((option, index) => (
          <li
            role="option"
            aria-selected={selectedOption === index}
            tabIndex={0}
            key={index}
            onKeyDown={handleKeyDown(index)}
            onClick={() => {
              setSelectedThenCloseDropdown(index);
              onChange(option);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {isError && <FormError message={errorMessage} />}
    </div>
  );
}
