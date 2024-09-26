const fs = require("fs");
const axios = require("axios");
const csv = require("csv-parser");

// URL da API do Strapi
const API_URL = "http://localhost:1337/api/employees";

// Função para enviar os dados para o Strapi
async function sendUserData(user) {
  try {
    const birthDate = new Date(user.birth_date).toISOString();

    const response = await axios.post(API_URL, {
      data: {
        name: user.name,
        employee_id: user.id,
        department: user.department,
        birth_date: birthDate,
      },
    });
    console.log(`Usuário ${user.name} importado com sucesso.`);
  } catch (error) {
    console.error(`Erro ao importar usuário ${user.name}:`, error.response);
  }
}

// Ler o arquivo CSV e enviar os dados para o Strapi
function importUsersFromCSV(filePath) {
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const user = {
        name: row.name,
        department: row.department,
        id: row.id,
        birth_date: row.birth,
      };
      sendUserData(user);
    })
    .on("end", () => {
      console.log("Todos os usuários foram importados.");
    });
}

// Executar a importação
const filePath = "./usuarios.csv"; // Caminho para o arquivo CSV
importUsersFromCSV(filePath);
