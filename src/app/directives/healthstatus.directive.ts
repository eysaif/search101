import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHealthstatus]',
})
export class HealthstatusDirective implements OnInit{
  constructor(private element: ElementRef, private rendrer: Renderer2) {}
  @Input() healthValue = 0;
  ngOnInit(): void {
    (this.healthValue > 5) ?
    this.rendrer.setStyle(this.element.nativeElement,'background','#00800082'):
    this.rendrer.setStyle(this.element.nativeElement,'background','red');

    (this.healthValue > 5) ?
    this.rendrer.setStyle(this.element.nativeElement,'color','#017201fa'): '';
  }

}
