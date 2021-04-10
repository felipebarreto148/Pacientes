# covid-pacientes

> Sobre

Aplicação para consultar, adicionar, remover e alterar dados de pacientes que fizeram o exame de covid.

> Como Utilizar

- Pré-requisitos
    - [ ]  NodeJS instalado.
    - [ ]  npm instalado

- Clone este repositório
- Suba o serviço da api primeiro
    - Para isso, entre na pasta api-servicos-back
    - Rode o comando

        ```bash
        node index.js
        ```

- Após isso, suba o app
- Entre na pasta da aplicação
    - Rode o seguinte comando

    ```bash
    npm install 
    ```

    - Com isso, ele irá baixar e instalar as dependências encontradas no package.json
    - Em seguida, basta rodar o seguinte comando para subir o app.

    ```bash
    npm run serve
    ```

> Funcionalidades

- Consultar
    - Na aba "Consultar", estarão listados todos os pacientes que foram cadastrados
- Adicionar
    - Basta entrar na aba "Adicionar" que será aberto um formulário para que seja inputado os dados do paciente
- Remover
    - Na aba "Consultar", basta dar dois cliques no paciente para removê-lo da lista.
- Alterar
    - Na aba alterar, será necessário selecionar o usuário que se deseja alterar, preencher os novos dados e clicar no botão que os dados daquele paciente serão alterados.
