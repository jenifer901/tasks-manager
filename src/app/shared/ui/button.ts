import { Component, Input } from '@angular/core';

/**
 * style con tailwinds
 */

@Component({
  selector: 'ui-button',
  standalone: true,
  template: ` <button [class]="classes">
    <ng-content />
  </button>`,
})
export class ButtonComponent {
  @Input()
  variant: 'primary' | 'secondary' = 'primary';

  get classes() {
    return this.variant === 'primary'
      ? 'px-4 py-2 rounded bg-blue-600 text-white'
      : 'px-4 py-2 rounded bg-gray-200';
  }
}
