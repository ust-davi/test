import { Tabs, Tab, Badge } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';

interface TabmenuProps {
  tabmenu?: Tab[];
  defaultValue: string;
  onChange?: (event: string) => void;
  className?: any;
  textColor?: any;
}

interface Tab {
  id: number;
  value?: string;
  label: string;
  count?: string;
  disabled?: boolean;
}

const DefaultTab = ({
  tabmenu,
  defaultValue,
  className,
  onChange,
  textColor,
}: TabmenuProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
    if (typeof onChange === 'function') {
      onChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Tabs
      value={value}
      className={className}
      onChange={handleChange}
      textColor={textColor}
    >
      {tabmenu?.map((tab: Tab) => (
        <Tab
          disabled={tab.disabled}
          key={tab.id}
          label={
            <>
              {tab.label}
              {tab.count && <Badge>{tab.count}</Badge>}
            </>
          }
          value={tab.value}
        />
      ))}
    </Tabs>
  );
};

export default DefaultTab;
