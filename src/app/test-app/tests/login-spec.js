import { Selector, ClientFunction, RequestMock } from 'testcafe';

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

const chuckMock = RequestMock()
  .onRequestTo('https://api.chucknorris.io/jokes/random')
  .respond(
    {
      value: 'Kjedelig vits...',
    },
    200,
    { 'Access-Control-Allow-Origin': '*' },
  );

test.page`http://localhost:8080/registration`.requestHooks(chuckMock)(
  'Registration should show alert',
  async (t) => {
    const firstNameInput = Selector('#firstname');
    const middleNameInput = Selector('div.person > input:nth-of-type(2)');
    const lastNameInput = Selector('.person')
      .child('input')
      .nth(2);

    const submitButton = Selector('#btn-submit');
    const completeText = Selector('.complete > h1');

    await t
      .typeText(firstNameInput, 'Lars')
      .wait(1000)
      .typeText(middleNameInput, 'Alexander')
      .wait(1000)
      .typeText(lastNameInput, 'Jakobsen')
      .wait(1000)
      .click(submitButton)
      .wait(1000)
      .expect(completeText.visible)
      .ok()
      .expect(completeText.innerText)
      .contains('Kjedelig vits')
      .wait(1000);
  },
);
