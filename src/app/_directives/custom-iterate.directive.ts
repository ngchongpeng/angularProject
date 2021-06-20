import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIterate]'
})
export class CustomIterateDirective {
  @Input() set appCustomIterate(num: number) {
    this.vcRef.clear();
    for (let i = 0; i < num; i++) {
      this.vcRef.createEmbeddedView(this.tRef);
    }
  }

  constructor(
    private tRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }
}
