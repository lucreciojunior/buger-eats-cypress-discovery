import signup from '../pages/SignupPage'
import SignupFactory from '../fectories/SignupFactory'
import SignupPage from '../pages/SignupPage'
// import {it} from "faker/lib/locales"

describe('Cadastro', function () {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d)=>{
    //         this.deliver = d

    //     })
    // })

    it('Usuário deve se tornar um entregador', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '031524654aa'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('EMAIL incorreto', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'lkj.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)
    })

    // context('Required fields', function () {
    //     const messages = [
    //         { field: 'name', output: 'É necessário informar o nome' },
    //         { field: 'cpf', output: 'É necessário informar o CPF' },
    //         { field: 'email', output: 'É necessário informar o email' },
    //         { field: 'postalcode', output: 'É necessário informar o CEP' },
    //         { field: 'number', output: 'É necessário informar o número do endereço' },
    //         { field: 'delivery_method', output: 'Selecione o método de entrega' },
    //         { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    //     ]

    //     belforeEach(function(){
    //         SignupPage.go()
    //         SignupPage.submit()
    //     })

    //     messages.forEach(function(msg){
    //         it(`${msg.field} is required`, function(){
    //             SignupPage.alertMessageShouldBe(msg.output)
    //         })
    //     })


    // })

    it('Required fields', function () {
        SignupPage.go()
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('É necessário informar o nome')
        SignupPage.alertMessageShouldBe('É necessário informar o CPF')
        SignupPage.alertMessageShouldBe('É necessário informar o email')
        SignupPage.alertMessageShouldBe('É necessário informar o CEP')
        SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        SignupPage.alertMessageShouldBe('Selecione o método de entrega')
        SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })

})