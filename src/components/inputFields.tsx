"use client";
import React, { useState } from "react";
import "@/styles/inputFields.css";
interface Props {
  labelText: string;
  inputName: string;
  type: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea: boolean;
}

const InputFields: React.FC<Props> = ({
  labelText,
  inputName,
  type,
  onChange,
  textarea,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-field ${isFocused ? "focused" : ""}`}>
      {textarea ? (
        <textarea
          name={inputName}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setIsFocused(false);
            }
          }}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={inputName}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (e.target.value === '') {
              setIsFocused(false);
            }
          }}
          onChange={onChange}
        />
      )}
      <label>{labelText}</label>
    </div>
  );
};

export default InputFields;
