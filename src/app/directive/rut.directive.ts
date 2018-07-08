import { Directive } from '@angular/core';

/**
 * Generated class for the RutFormatDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[appRut2]',
    host: {
        '(keyup)': 'onInputChange($event)',
        '(blur)': 'onInputChange($event)'
    }
})
export class RutDirective {
   // @Input() rut: string;
  // @Output() rutChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  onInputChange($event) {
    // console.log('rut3', $event);
    let value = '';
    if (!$event.target && !$event._value) {
      // console.log('aqui 1');
      return;
    } else if ($event.target) {
      value = $event.target.value;
    } else if ($event._value) {
      value = $event._value;
    }

    value = value.replace(/\.|\-/g, '');
    if (value.length < 2) {
      // console.log('aqui 2');
      return;
    }
     if (!value || value === '') {
      // console.log('aqui 3');
      return $event.target.value = '';
    }

    if (!value || !(value.slice(0, -1).match(/\d/g))) {

      return;
    }

    $event.target.value = this.formatter(value);

  }

  formatter(value) {
    const lastDigit = value.slice(-1).toUpperCase();
    const digitsBeforeDash = value.slice(0, -1).match(/\d/g).join('');
    const digitsWithDots = digitsBeforeDash.split(/(?=(?:...)*$)/).join('.');
    return digitsWithDots + '-' + lastDigit;
  }

}
