import axios from "axios";

export async function getBrands() {
  try {
    const response = await axios.get('http://localhost:5000/api/marcas');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las marcas:', error);
  }
};

export async function getCategories(){
  try {
    const response = await axios.get('http://localhost:5000/api/categorias');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
  }
}

export async function getUseds() {
  try {
    const response = await axios.get('http://localhost:5000/api/usados');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usados:', error);
  }
}

export async function getVehicles(category){
  try {
    const response = await axios.get(`http://localhost:5000/api/vehiculos/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los vehículos:', error);
  }
}