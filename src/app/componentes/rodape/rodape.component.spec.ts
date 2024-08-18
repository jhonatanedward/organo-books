import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RodapeComponent } from "./rodape.component"

describe('Rodape component', () => {
    let fixture: ComponentFixture<RodapeComponent>
    let component: RodapeComponent
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RodapeComponent
            ]
        })

        fixture = TestBed.createComponent(RodapeComponent)
        component = fixture.componentInstance
    })

    it('deveria ser criado', () => {
        expect(component).toBeTruthy()
    })

    it('deveria definir os atributos src e alt', () => {
        expect(component.src).toBeDefined()
        expect(component.alt).toBeDefined()
    })

    it('deveria renderizar o rodape de acordo com as propriedades src e alt', () => {
        component.src = 'https://example.com/test-image.jpg'
        component.alt = 'Imagem teste'
        expect(component).toMatchSnapshot()
    })
})