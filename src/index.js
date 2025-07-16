import venom from 'venom-bot';

venom.create({
    session: process.env.SESSION_NAME,
    headless: 'new',
    puppeteerOptions:{
        protocolTimeuout: 12000
    }
}).then((client)=>{
    client.onMessage((message)=>{
        if(message.body === 'oi'){
            client.sendText(message.from, 'Olá')
        }
    })
}).catch((error)=>{
    console.log(error)
})