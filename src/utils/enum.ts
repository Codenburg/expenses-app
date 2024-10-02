/**
 * Esta función toma un objeto cuyos keys y values son strings
 * y devuelve un array con los valores del objeto.
 *
 * @param obj - Un objeto con keys y values de tipo string
 * @returns Un array de los valores del objeto, con el tipo correcto
 */

export function getValues<T extends Record<string, string>>(obj: T) {
  return Object.values(obj) as [(typeof obj)[keyof T]];
}
