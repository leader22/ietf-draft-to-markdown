import { txtToMarkdown } from './txt-to-markdown/index.js';

(() => {
  const [$input, $output] = document.querySelectorAll('textarea');

  // auto select to copy
  $output.onclick = ev => ev.target.select();

  (function render() {
    requestAnimationFrame(render);

    const src = $input.value.trim();
    $output.value = src.length ? txtToMarkdown(src) : '';

    const pos = $input.scrollTop / $input.scrollHeight;
    $output.scrollTop = $output.scrollHeight * pos;
  }());
}());
