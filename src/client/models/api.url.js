import axios from 'axios';
import { HOSTNAME } from '../constants/constants';

export const axiosClient = axios.create({
  baseURL: HOSTNAME
});