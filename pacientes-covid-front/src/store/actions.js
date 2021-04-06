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
  async deletePacientes(id) {
    try{
      Pacientes.deletePacientes(id);
    } catch(err){
      console.error(err);
    }
  },
}