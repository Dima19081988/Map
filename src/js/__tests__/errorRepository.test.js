import { ErrorRepository } from "../app";

describe('ErrorRepository', () => {
    let repo;

    beforeEach(() => {
        repo = new ErrorRepository();
    })

    test('конструктор формирует Map корректно', () => {
        expect(repo.errors).toBeInstanceOf(Map);
        expect(repo.errors.size).toBe(4);
        expect(repo.errors.get(400)).toBe('Bad Request');
        expect(repo.errors.get(504)).toBe('Gateway Timeout');
    });

    test('tranlate возвращает правильное описание ошибки с известным кодом', () => {
        expect(repo.translate(400)).toBe('Bad Request');
        expect(repo.translate(404)).toBe('Not Found');
        expect(repo.translate(502)).toBe('Bad Gateway');
        expect(repo.translate(504)).toBe('Gateway Timeout');
    });

    test('translate возвращает "Unknown error" для неизвестных кодов', () => {
        expect(repo.translate(999)).toBe('Unknown error');
        expect(repo.translate(0)).toBe('Unknown error');
        expect(repo.translate(NaN)).toBe('Unknown error');
        expect(repo.translate(undefined)).toBe('Unknown error');
        expect(repo.translate(-400)).toBe('Unknown error');
        expect(repo.translate('404')).toBe('Unknown error');
    });
})