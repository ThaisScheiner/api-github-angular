import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoUiComponent } from './conteudo-ui.component';

describe('ConteudoUiComponent', () => {
  let component: ConteudoUiComponent;
  let fixture: ComponentFixture<ConteudoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
