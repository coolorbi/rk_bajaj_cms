import axios from 'axios';
const API_ROUTE = '/api/service';

const createService = async (serviceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(API_ROUTE, serviceData, config);
  return data;
};

const getUserServices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(API_ROUTE, config);
  return data;
};

const serviceService = {
  createService,
  getUserServices,
};

export default serviceService;
