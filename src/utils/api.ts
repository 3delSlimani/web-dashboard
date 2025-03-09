import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com/api'; // Replace with your actual API URL

export const getCPUUsage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cpu`);
        return response.data;
    } catch (error) {
        console.error('Error fetching CPU usage:', error);
        throw error;
    }
};

export const getRAMUsage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ram`);
        return response.data;
    } catch (error) {
        console.error('Error fetching RAM usage:', error);
        throw error;
    }
};

export const getDiskUsage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/disk`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Disk usage:', error);
        throw error;
    }
};

export const controlService = async (serviceName, action) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/services/${serviceName}`, { action });
        return response.data;
    } catch (error) {
        console.error('Error controlling service:', error);
        throw error;
    }
};

export const getLogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/logs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};

export const getNotifications = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/notifications`);
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
};

export const manageBackup = async (action, backupData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/backup`, { action, ...backupData });
        return response.data;
    } catch (error) {
        console.error('Error managing backup:', error);
        throw error;
    }
};