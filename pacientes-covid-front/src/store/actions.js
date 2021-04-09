import Pacientes from '@/services/pacientes';
import { data } from 'autoprefixer';

import state from './state';

export default {
  async getPacientes() {
    try {
      const pacientesList = await Pacientes.getPacientes();
      state.pacientes = pacientesList?.data?.pacientes;
    } catch (err) {
      console.error(err);
    }
  },
  async addPaciente(data) {
    try {
      Pacientes.addPaciente(data);
    } catch (err) {
      console.error(err);
    }
  },
  async deletePacientes(id) {
    try {
      await Pacientes.deletePacientes(id);
    } catch (err) {
      console.error(err);
    }
  },
  async putPaciente(id, data) {
    try {
      await Pacientes.putPaciente(id, data);
    } catch (err) {
      console.error(err);
    }
  },
  setIdPaciente() {
    return state.pacientes.length;
  },
};
