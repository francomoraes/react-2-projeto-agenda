const contacts = [
    {
        idContato: 0,
        nome: 'Joao',
        email: 'joao@mail.com',
        apelido: 'John',
        telefones: [ 
            {tipo: 'casa', numero:  '1020-3040'},
            {tipo: 'trabalho', numero:  '2020-3040'},
            {tipo: 'celular', numero:  '3020-3040'}
        ],
        endereco: {
            logradouro: 'Rua 1',
            cidade: 'Cidade 1',
            estado: 'Estado 1',
            cep: '89221140',
            pais: 'Brasil'
        },
        notas: 'Observações sobre o contato',
        foto: 'string link base64'
    },
    {
        idContato: 1,
        nome: 'Ana',
        email: 'ana@mail.com',
        apelido: 'Nika',
        telefones: [ 
            {tipo: 'casa', numero:  '1020-3040'},
            {tipo: 'trabalho', numero:  '2020-3040'},
            {tipo: 'celular', numero:  '3020-3040'}
        ],
        endereco: {
            logradouro: 'Rua 1',
            cidade: 'Cidade 1',
            estado: 'Estado 1',
            cep: '89221140',
            pais: 'Brasil'
        },
        notas: 'Observações sobre o contato',
        foto: 'string link base64'
    },
    {
        idContato: 2,
        nome: 'Pedro',
        email: 'pedro@mail.com',
        apelido: 'Pipo',
        telefones: [ 
            {tipo: 'casa', numero:  '1020-3040'},
            {tipo: 'trabalho', numero:  '2020-3040'},
            {tipo: 'celular', numero:  '3020-3040'}
        ],
        endereco: {
            logradouro: 'Rua 1',
            cidade: 'Cidade 1',
            estado: 'Estado 1',
            cep: '89221140',
            pais: 'Brasil'
        },
        notas: 'Observações sobre o contato',
        foto: 'string link base64'
    }
];

export const getContacts = () => contacts;
export const getContactById = (id) => contacts.find((contact) => contact.idContato === id)