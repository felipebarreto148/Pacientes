import axios from 'axios';

const getPacientes = () => axios.get('http://localhost:3000/pacientes/');

const deletePacientes = (id) => axios.delete(`http://localhost:3000/pacientes/${id}`);

// const putPaciente = () => axios.put();

export default {
  getPacientes,
  deletePacientes,
}