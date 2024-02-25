/**
 * Cleans a given string to create a SEO-friendly URL.
 *
 * @param {string} value - The string to be cleaned.
 * @returns {string} The cleaned string with special characters removed, spaces replaced with hyphens, and converted to lowercase.
 * @example
 *
 * ```js
 * import seoURLCleaner from 'seo-url-cleaner';
 * let result = seoURLCleaner('lorem ipsum dolor sit amet'); // lorem-ipsum-dolor-sit-amet
 * ```
 */
function seoURLCleaner(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^A-Z0-9]+/gi, ' ')
    .replace(/ +/g, '-')
    .toLowerCase();
}

export default seoURLCleaner;
