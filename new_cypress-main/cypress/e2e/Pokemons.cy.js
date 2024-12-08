describe('Покупка нового аватара для своего тренера', function () {

    it('покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); //вход на сайт
         cy.wait(2000); // ожидание загрузки сайта
         cy.get(':nth-child(1) > .auth__input').type('YOUR LOGIN'); //ввод логина
         cy.get('#password').type('YOUR PASSWORD'); // ввод пароля
         cy.get('.auth__button').click(); // кнопка войти
         cy.wait(2000); // ожидание загрузки сайта
         cy.get('.header__container > .header__id').click({ force: true }); // вход в карточку твоего тренера
         cy.get('[href="/shop"]').click(); // перейти в покупку нового аватара
         cy.get('.available > button').first().click({ force: true }); // выбор первого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5062821234567892'); // ввод № карта
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0534'); // ввод срока действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // cvc
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Anastasiya'); // Ввод имени
         cy.get('.pay-btn').click(); // купить
         cy.get('#cardnumber').type('56456'); // ввод подтверждающего пароля
         cy.get('.payment__submit-button').click(); // поддтверждение
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно').should('be.visible'); // подтверждение успешной покупки
     })

 })