import { Selector, ClientFunction } from 'testcafe';

fixture`Login`.page`http://localhost:8080`;

const getLocation = ClientFunction(() => document.location.href);

test('Should end up at registration', async (t) => {
  await t
    .typeText('#email', 'myuser')
    .wait(1000)
    .typeText('#pass', 'pass1234')
    .wait(1000)
    .click('.buttons > input')
    .wait(1000)
    .expect(getLocation())
    .contains('registration');
});
