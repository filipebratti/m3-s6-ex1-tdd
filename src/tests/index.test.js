const segundosParaFormato = require('../index.js'); // Certifique-se de substituir 'seuscript' pelo nome real do seu arquivo

test('30 segundos deve ser convertido para "0h 0m 30s"', () => {
  expect(segundosParaFormato(30)).toBe("0h 0m 30s");
});

test('350 segundos deve ser convertido para "0h 5m 50s"', () => {
  expect(segundosParaFormato(350)).toBe("0h 5m 50s");
});

test('3725 segundos deve ser convertido para "1h 2m 5s"', () => {
  expect(segundosParaFormato(3725)).toBe("1h 2m 5s");
});
