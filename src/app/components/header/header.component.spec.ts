import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const logoElement = fixture.debugElement.query(By.css('img'));
    expect(logoElement).toBeTruthy();
    expect(logoElement.nativeElement.src).toContain('assets/logo.svg');
  });

  it('should have alt text for the logo', () => {
    const logoElement = fixture.debugElement.query(By.css('img'));
    expect(logoElement.nativeElement.alt).toBe(
      'Moedas na cor dourada ao lado do texto Currency Converter',
    );
  });
});
