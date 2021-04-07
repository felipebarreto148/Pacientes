import axios from 'axios';

const getPacientes = () => axios.get('http://localhost:3000/pacientes/');

const addPaciente = (data) => axios.post(`http://localhost:3000/pacientes/`, data);

const deletePacientes = (id) => axios.delete(`http://localhost:3000/pacientes/${id}`);

const putPaciente = (id, data) => axios.put(`http://localhost:3000/pacientes/${id}`, data);

export default {
  getPacientes,
  addPaciente,
  deletePacientes,
  putPaciente,
}