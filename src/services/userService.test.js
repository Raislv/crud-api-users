const userService = require('../services/userService');

test('Deve retornar lista de usuários', () => {
  const result = userService.getAllUsers();
  expect(Array.isArray(result)).toBe(true);
});

test('Deve retornar lista de usuários', () => {
  const result = userService.listUsers();
  expect(Array.isArray(result)).toBe(true);
});

test('Deve criar um novo usuário com ID e nome', () => {
  const novoUsuario = { nome: 'Raí', email: 'rai@gmail.com' };
  const criado = userService.createUser(novoUsuario);

  expect(criado).toHaveProperty('id');
  expect(criado.nome).toBe('Raí');
});

jest.mock('../models/UserModel', () => ({
  getAllUsers: jest.fn(() => []),
  saveUsers: jest.fn()
}));