import { useEffect } from 'react';

export const useAsync = (asyncFn, successFunction, returnFunction, dependencies = []) => {
  useEffect(() => {
    let isActive = true;

    const executeAsyncFn = async () => {
      try {
        const result = await asyncFn();
        if (isActive) {
          successFunction(result.data);
        }
      } catch (error) {
        console.error('Error in async function:', error);
      }
    };

    executeAsyncFn();

    return () => {
      if (returnFunction) returnFunction();
      isActive = false;
    };
  }, dependencies);
};
