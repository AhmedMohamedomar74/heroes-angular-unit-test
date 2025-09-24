import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Counter } from "./counter";
import { provideZonelessChangeDetection } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('counter component: ', () => {
  let fixture:ComponentFixture<Counter> ,  component:Counter
  beforeAll(()=>
  {
    // make configuration for component
    TestBed.configureTestingModule({
      imports : [Counter],
      providers : [provideZonelessChangeDetection()]
    })

    // make fixture
    fixture = TestBed.createComponent(Counter)
    component = fixture.componentInstance
  })

  // it("counter = 0 should be reder in template",()=>
  // {
  //   fixture.detectChanges()
  //   let pElement = fixture.debugElement.query(By.css("p"));
  //   expect(pElement.nativeElement.textContent.trim()).toBe("0");
  // })

  it("should increment counter be click to the BTN",()=>
  {
    let button = fixture.debugElement.query(By.css("#inc"))

    button.triggerEventHandler("click")

    fixture.detectChanges()

    let pElement = fixture.debugElement.query(By.css("p"));
    expect(pElement.nativeElement.textContent.trim()).toBe("1");
  })
});
