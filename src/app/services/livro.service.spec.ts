import { LivroService } from "./livro.service"

describe('Livro service', () => {
    let service: LivroService;

    it('deveria ser criado', () => {
        service = new LivroService()
        expect(service).toBeTruthy();
    })
})