import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {

    if(request.method === 'POST'){

        const TOKEN = '59d16da5e1185912d9b9a12a985b8c';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "970952",
            ...request.body,
            // title : "Comunidade de teste",
            // imageUrl : "https://github.com/ivan-mori.png",
            // creatorSlug : "ivan-mori"
        })
    
        response.json({
            dados: 'algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET, porém no POST temos'
    })
}