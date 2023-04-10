const mongoose = require('mongoose');

// Função para conectar-se ao MongoDB
const connectDB = async () => {
  try {
    // Conecte-se ao banco de dados usando a URL fornecida em variável de ambiente
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Exiba uma mensagem de confirmação de que a conexão foi bem-sucedida
    console.log(`MONGODB CONNECTED: ${conn.connection.host} 🏦`);
  } catch (error) {
    // Exiba uma mensagem de erro se não for possível conectar ao MongoDB
    console.error(`ERROR: Unable to connect to MongoDB: ${error.message}`);

    // Saia do processo com código de status 1 para indicar um erro
    process.exit(1);
  }
};

// Exporte a função connectDB para ser usada em outros arquivos
module.exports = connectDB;
