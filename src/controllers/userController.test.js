const userController = require('../controllers/userController');

test('Deve verificar se a função getAll é definida', () => {
  expect(typeof userController.getAll).toBe('function');
});

test('Deve verificar se a função createUser é definida', () => {
  expect(typeof userController.createUser).toBe('function');
});

test('Deve verificar se a função deleteUser é definida', () => {
  expect(typeof userController.deleteUser).toBe('function');
});