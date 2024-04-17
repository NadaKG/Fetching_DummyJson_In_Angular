import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowOnHover]'
})
export class ShadowOnHoverDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.boxShadow = '';
  }
}
