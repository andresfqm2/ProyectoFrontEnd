import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [
        RouterTestingModule
      ],
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AppStarWars'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AppStarWars');
  });

<<<<<<< HEAD
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AppStarWars app is running!');
=======
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to AppStarWars!');
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
  });
});
