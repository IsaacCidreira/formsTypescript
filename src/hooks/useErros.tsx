import React, { ReactNode, useState } from 'react';

interface errorType {
  field: string;
  message: string;
}
export const useErros = () => {
  const [errors, setErrors] = useState<errorType[]>([]);

  function setError({ field, message }: errorType) {
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if (errorAlreadyExists) {
      return;
    }
    setErrors((prevState: any) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error?.field !== fieldName),
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message;
  }
  return {
    setError,
    removeError,
    errors,
    getErrorMessageByFieldName,
  };
};
