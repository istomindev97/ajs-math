import ErrorRepository from '../map';

const errorRepo = new ErrorRepository();

test('должен добавлять ошибки с помощью метода addError', () => {
    errorRepo.addError(404, 'Not Found');
    expect(errorRepo.errors.size).toBe(1);
    expect(errorRepo.errors.get(404)).toBe('Not Found');
});

test('должен возвращать описание ошибки по коду', () => {
    errorRepo.addError(500, 'Internal Server Error');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('должен возвращать неизвестную ошибку', () => {
    expect(errorRepo.translate(458)).toBe('Unknown error');
});
