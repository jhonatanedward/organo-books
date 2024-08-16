import { CabecalhoComponent } from "./cabecalho.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"

describe('Cabecalho component', () => {
    let component: CabecalhoComponent;
    let fixture: ComponentFixture<CabecalhoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CabecalhoComponent],
        })
        fixture = TestBed.createComponent(CabecalhoComponent)
        component = fixture.componentInstance;
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy()
    });

    it('deveria definir as propriedades alt e src', () => {
        expect(component.src).toBeDefined()
        expect(component.alt).toBeDefined()
    })

})