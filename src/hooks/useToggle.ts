import { useState } from "react";

const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
};

export default useToggle;
