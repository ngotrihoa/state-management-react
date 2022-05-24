import chroma from 'chroma-js';
import { StylesConfig } from 'react-select';

export const colourStyles: StylesConfig = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  singleValue: (styles: any, { data }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      borderWidth: '1px',
      borderColor: color.alpha(0.4).css(),
      textAlign: 'center',
      maxWidth: 'fit-content',
      padding: '0 6px',
      borderRadius: '2px',
      fontSize: '14px',
      margin: '0 auto',
      color: color.css(),
      backgroundColor: color.alpha(0.1).css(),
    };
  },
};
