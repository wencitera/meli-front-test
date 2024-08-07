import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller;

  const callEndpoint = async (axiosCall) => {
    if (axiosCall.controller) {
      controller = axiosCall.controller;
    }
    setLoading(true);
    let result = {};
    try {
      result = await axiosCall.call;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    } finally {
      setLoading(false);
    }
    return result;
  };

  const cancelEndpoint = () => {
    if (controller) {
      controller.abort();
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoad;
