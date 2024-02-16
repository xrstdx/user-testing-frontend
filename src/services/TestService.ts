import axios from 'axios';

const API_URL = ''; 

const TestService = {
  getAllTests: async (amount = 5, page = 0) => {
    try {
      const response = await axios.get(`${API_URL}/test?amount=${amount}&page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tests:', error);
      throw error;
    }
  },

  getAllTestResults: async (amount = 5, page = 0) => {
    try {
      const response = await axios.get(`${API_URL}/test/results?amount=${amount}&page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching test results:', error);
      throw error;
    }
  },

  getTestById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/test/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching test by ID:', error);
      throw error;
    }
  },

  submitTest: async (SubmitResponse)) => {
    try {
      const response = await axios.post(`${API_URL}/test`, SubmitResponse);
      return response.data;
    } catch (error) {
      console.error('Error submitting test:', error);
      throw error;
    }
  }
};

export default TestService;


