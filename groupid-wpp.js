const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

//cliente do WhatsApp com autenticação local
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox'] }
});

// qrcode para autenticação
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('Escaneie o QR code acima para autenticar.');
});

//pronto para uso
client.on('ready', async () => {
    console.log('Cliente iniciado e pronto para uso!');

    //todos os chats do cliente
    const chats = await client.getChats();

    //grupos e exibe o nome e o ID de cada grupo
    chats.forEach(chat => {
        if (chat.isGroup) {
            console.log(`Nome do Grupo: ${chat.name} | ID do Grupo: ${chat.id._serialized}`);
        }
    });

    client.destroy();
});

client.initialize();
