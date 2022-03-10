import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let testRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new HighlightDirective(testRef);
    expect(directive).toBeTruthy();
  });
});
