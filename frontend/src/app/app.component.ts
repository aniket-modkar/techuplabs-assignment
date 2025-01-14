import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'techiplab-assignment';
  hasBaseDropZoneOver!: boolean;
  hasAnotherDropZoneOver!: boolean;
  public items: string[] = [
    'Amsterdam',
    'Antwerp',
    'Athens',
    'Barcelona',
    'Berlin',
    'Birmingham',
    'Bradford',
    'Bremen',
    'Brussels',
    'Bucharest',
    'Budapest',
    'Cologne',
    'Copenhagen',
    'Dortmund',
    'Dresden',
    'Dublin',
    'Düsseldorf',
    'Essen',
    'Frankfurt',
    'Genoa',
    'Glasgow',
    'Gothenburg',
    'Hamburg',
    'Hannover',
    'Helsinki',
    'Kraków',
    'Leeds',
    'Leipzig',
    'Lisbon',
    'London',
    'Madrid',
    'Manchester',
    'Marseille',
    'Milan',
    'Munich',
    'Málaga',
    'Naples',
    'Palermo',
    'Paris',
    'Poznań',
    'Prague',
    'Riga',
    'Rome',
    'Rotterdam',
    'Seville',
    'Sheffield',
    'Sofia',
    'Stockholm',
    'Stuttgart',
    'The Hague',
    'Turin',
    'Valencia',
    'Vienna',
    'Vilnius',
    'Warsaw',
    'Wrocław',
    'Zagreb',
    'Zaragoza',
    'Łódź',
  ];

  public ngxControl = new UntypedFormControl();

  private _ngxDefaultTimeout!: any;
  private _ngxDefaultInterval!: any;
  private _ngxDefault!: any;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  public onFileSelected(e: any) {
    console.log(e);
  }

  public inputTyped = (source: string, text: string) =>
    console.log('SingleDemoComponent.inputTyped', source, text);

  public doFocus = () => console.log('SingleDemoComponent.doFocus');

  public doBlur = () => console.log('SingleDemoComponent.doBlur');

  public doOpen = () => console.log('SingleDemoComponent.doOpen');

  public doClose = () => console.log('SingleDemoComponent.doClose');

  public doSelect = (value: any) =>
    console.log('SingleDemoComponent.doSelect', value);

  public doRemove = (value: any) =>
    console.log('SingleDemoComponent.doRemove', value);

  public doSelectOptions = (options: INgxSelectOption[]) =>
    console.log('SingleDemoComponent.doSelectOptions', options);

  public doNgxDefault(): any {
    return this._ngxDefault;
  }
}
