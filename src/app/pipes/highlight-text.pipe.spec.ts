import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
  const pipe = new HighlightTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('wrap a simple string in a <span>', () => {
    expect(pipe.transform('foobar', 'foo')).toBe('<span class="highlight-text">foo</span>bar')
  });
});
