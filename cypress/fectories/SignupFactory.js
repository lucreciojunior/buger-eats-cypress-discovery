var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default { 

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '54759475',
                street: 'Rua Manoel Honorato da Costa',
                number: '000',
                details: 'casa',
                district: 'Vila da Fábrica',
                city_state: 'Camaragibe/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}