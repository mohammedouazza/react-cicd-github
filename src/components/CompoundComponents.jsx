import React, { createContext, useContext, useState } from "react";

const ContextAPI = createContext(null);

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return (
    <ContextAPI.Provider value={{ checked, setChecked }}>
      {children}
    </ContextAPI.Provider>
  );
};

const CheckboxInput = () => {
  const { checked, setChecked } = useContext(ContextAPI);
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
      }}
    />
  );
};

const Label = ({ children }) => {
  const context = useContext(ContextAPI);
  if (!context) {
    throw new Error("Label should be called inside Ckeckbox Component");
  }

  const { setChecked } = context;
  return (
    <label onClick={() => setChecked((state) => !state)}>{children}</label>
  );
};
const CompoundComponents = () => {
  return (
    <>
      <Checkbox>
        <CheckboxInput />
        <div>
          <Label>Check box label</Label>
        </div>
      </Checkbox>
    </>
  );
};

export default CompoundComponents;
