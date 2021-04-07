import Pacientes from '../services/pacientes';

import state from './state';

export default {
  async getPacientes() {
    try {
      const pacientesList = await Pacientes.getPacientes();
      state.pacientes = pacientesList?.data?.pacientes;
    } catch(err){
      console.error(err);
    }
  },
  async addPaciente(data) {
    try{
      console.log(data);
    } catch(err) {
      console.error(err);
    }
  },
  async deletePacientes(id) {
    try{
      await Pacientes.deletePacientes(id);
    } catch(err){
      console.error(err);
    }
  },
}