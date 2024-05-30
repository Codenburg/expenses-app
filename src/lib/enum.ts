export function getValues<T extends Record<string, string>>(obj: T) {
  return Object.values(obj) as [(typeof obj)[keyof T]];
}
