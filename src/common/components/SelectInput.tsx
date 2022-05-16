import { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent, Icon } from '@mui/material';

interface SelectInputProps {
  menuItems?: Menu[];
  onChange?: (event: string) => void;
  placeholder?: string;
  className?: string | undefined;
  variant?: any;
  size?: any;
  menuItmesClassName?: string;
  useCommaNumber?: boolean;
  defaultValue?: any;
}

interface Menu {
  id: number;
  value: string | number;
}

const SelectInput = ({
  menuItems,
  size,
  variant,
  placeholder,
  onChange,
  className,
  defaultValue,
  menuItmesClassName,
  useCommaNumber,
}: SelectInputProps) => {
  const [menu, setMenu] = useState(defaultValue || '');
  const handleChange = (event: SelectChangeEvent) => {
    setMenu(event.target.value as string);

    if (typeof onChange === 'function') {
      onChange(event.target.value as string);
    }
  };

  const addComma = (value: any) => {
    return useCommaNumber && typeof value === 'number'
      ? value.toLocaleString()
      : value;
  };

  return (
    <Select
      labelId="label"
      value={menu}
      onChange={handleChange}
      variant={variant}
      className={className}
      size={size}
      displayEmpty
      fullWidth
      IconComponent={(props) => <Icon {...props}>keyboard_arrow_down</Icon>}
      MenuProps={{ disableScrollLock: true }}
      renderValue={(value: string) => {
        if (!value) {
          return <span>{placeholder}</span>;
        }
        return addComma(value);
      }}
    >
      {menuItems?.map((menu: Menu) => (
        <MenuItem
          key={menu.id}
          value={menu.value}
          defaultValue={defaultValue}
          className={menuItmesClassName}
        >
          {addComma(menu.value)}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
