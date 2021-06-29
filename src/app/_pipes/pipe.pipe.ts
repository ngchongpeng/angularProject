import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  pure: false
})
export class PipePipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private cdr: ChangeDetectorRef) {
    this.asyncPipe = new AsyncPipe(this.cdr);
  }

  transform(value: any): any {
    return this.asyncPipe.transform(value);
  }

  ngOnDestroy(): void {
    this.asyncPipe.ngOnDestroy();
  }
}
