/* eslint-disable indent */
import React from 'react';
import '../../styles/utils/_variables.scss';
import Select, {
  ActionMeta,
  SingleValue,
  StylesConfig,
  Theme,
} from 'react-select';

const customTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: '#FAFBFC',
    primary: '#FAFBFC',
    neutral80: '#89939A',
    neutral20: '#B4BDC3',
    neutral30: '#89939A',
  },
});

type DropdownMenuProps = {
  options: readonly { label: string; value: string }[];
  menuName: string;
  defaultValue: { label: string; value: string };
  handleOption: (
    newValue: SingleValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>
  ) => void;
};

const customStyles: StylesConfig<{ label: string; value: string }, false> = {
  singleValue: (styles) => ({ ...styles, color: '#313237' }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected
      ? '#313237'
      : state.isFocused
        ? '#89939A'
        : '#89939A',
    // '&:hover': {
    //   color: state.isFocused ? '#313237' : '#89939A',
    // },

    backgroundColor: state.isFocused ? '#FAFBFC' : '#fff',
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? '#313237' : '#B4BDC3',
    '&:hover': {
      borderColor: state.isFocused ? '#89939A' : '#89939A',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '38px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const DropdownMenu = ({
  options,
  menuName,
  defaultValue,
  handleOption,
}: DropdownMenuProps) => {
  return (
    <div>
      {menuName && (
        <label
          htmlFor="react-select-input"
          style={{
            display: 'block',
            marginBottom: '4px',
            fontFamily: 'Mont, sans-serif',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            color: '#89939A',
          }}
        >
          {menuName}
        </label>
      )}
      <Select
        defaultValue={defaultValue}
        styles={customStyles}
        options={options}
        theme={customTheme}
        onChange={handleOption}
      />
    </div>
  );
};
