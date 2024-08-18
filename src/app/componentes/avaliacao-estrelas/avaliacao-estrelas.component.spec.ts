import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AvaliacaoEstrelasComponent } from "./avaliacao-estrelas.component"
import { NG_VALUE_ACCESSOR } from "@angular/forms"
import { forwardRef } from "@angular/core"

describe('AvaliacaoEstrelasComponent', () => {
    let component: AvaliacaoEstrelasComponent
    let fixture: ComponentFixture<AvaliacaoEstrelasComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AvaliacaoEstrelasComponent
            ],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
                    multi: true
                }
            ]
        })

        fixture = TestBed.createComponent(AvaliacaoEstrelasComponent)
        component = fixture.componentInstance
        component.readOnly = false
    })

    it('deveria criar o component', () => {
        expect(component).toBeTruthy()
    })

    it('deveria atribuir um valor para a classificação quando o método writeValue for chamado', () => {
        const classificacao = 3
        component.writeValue(classificacao)
        expect(component.classificacao).toBe(3)
    })

    it('deveria chamar o onChange quando o método classificar for chamado', () => {
        const onChangeSpy = jest.spyOn(component, 'onChange');
        component.classificar(1)
        expect(onChangeSpy).toHaveBeenCalled()
    })

    it('deveria chamar o onTouched quando o método classificar for chamado', () => {
        const onTouchedSpy = jest.spyOn(component, 'onTouched');
        component.classificar(1)
        expect(onTouchedSpy).toHaveBeenCalled()
    })
})