/**
 * ```js
 *
 * const open = require('open-chrome-refresh');
 * open('https://github.com/Topthinking/open-chrome-refresh') // open
 * open('https://github.com/Topthinking/open-chrome-refresh') // refresh!
 * ```
 */
declare module 'open-chrome-refresh' {
  function open(url: string): void;
  export = open;
}
