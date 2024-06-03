import { api } from "@/config/axios.config";

export const getEvents = async (selectedCategory) => {
  try {
    const response = await api.get(`/calendars`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getCategories = async () => {
  try {
    const response = await api.get("/calendars/categories");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const createEvent = async (data) => {
  try {
    const response = await api.post("/calendars", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete
export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`/calendars/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// update
export const updateEvent = async (id, data) => {
  try {
    const response = await api.put(`/calendars/${id}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
