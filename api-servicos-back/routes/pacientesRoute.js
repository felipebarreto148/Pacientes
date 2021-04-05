const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'pacientes.json');

const getPacientes = () => {
  const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const savePacientes = (paciente) => fs.writeFileSync(filePath, JSON.stringify(paciente, null, '\t'));

const pacientesRouter = (app) => {

  app.route('/pacientes/:id?')
    .get((req, res) => {
      const pacientes = getPacientes()
      res.send({ pacientes })
    })
    .post((req, res) => {
      const pacientes = getPacientes()
      pacientes.push(req.body)
      savePacientes(pacientes)

      res.status(201).send('OK')
    })
    .put((req, res) => {
      const pacientes = getPacientes()
      savePacientes(pacientes.map(paciente => {
        if (paciente.id === req.params.id) {
          return {
            ...paciente,
            ...req.body
          }
        }

        return paciente
      }))

      res.status(200).send('OK')
    })
    .delete((req, res) => {
      const pacientes = getPacientes()
      savePacientes(pacientes.filter(paciente => paciente.id !== req.params.id))

      res.status(200).send('OK')
    })
}

module.exports = pacientesRouter