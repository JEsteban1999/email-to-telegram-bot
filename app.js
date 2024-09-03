const express = require('express');
const routes = require('./routes');
const { getLastMail } = require('./controllers');

require('dotenv').config();

const app = express();

function startEmailCheck(email) {
    // Realizar la primera petición inmediatamente
    (async () => {
        try {
            await getLastMail({ params: { email } }, { json: () => {} });
        } catch (error) {
            console.error('Error checking for new emails:', error);
        }
    })();

    // Configurar el intervalo para seguir verificando cada 5 minutos
    setInterval(async () => {
        try {
            await getLastMail({ params: { email } }, { json: () => {} });
        } catch (error) {
            console.error('Error checking for new emails:', error);
        }
    }, 300000); // 300000 ms = 5 minutos
}

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    startEmailCheck(process.env.CORREO_ELECTRONICO);
});

app.get('/', async (req, res) => {
    res.send('Welcome to Gmail API with NodeJS');
});

app.use('/api', routes);