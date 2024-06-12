export function capitalize(string) {
  if (typeof string !== 'string') return 'Input is not a string';

  if (!string.length) return '';

  return string[0].toUpperCase() + string.slice(1);
}
