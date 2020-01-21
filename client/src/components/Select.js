import React, {useState} from "react";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#131313' : '#000135',
  }),
  control: () => ({
    width: 200,
    display: 'flex',
    maxHeight: 50
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {...provided, opacity, transition};
  }
}

const options = [
  {value: 'dvd', label: 'DVD'},
  {value: 'blueRay', label: 'Blue-Ray'},
  {value: 'vhs', label: 'VHS'},
];

const Format = ({getSelect}) => {
  const [selectOptions, setSelectOptions] = useState({value: 'default', label: 'Format'});

  const handleChange = (selectedOption) => {
    setSelectOptions(selectedOption)
  };
  getSelect(selectOptions);
  return (
        <Select
          styles={customStyles}
          value={selectOptions}
          onChange={handleChange}
          options={options}
        />
  )
};
export default Format;