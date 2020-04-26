import regex from "./regex";

interface Config {
  isEmail?: boolean;
  isUrl?: boolean;
  isHex?: boolean;
  isIp?: boolean;
  isEmpty?: boolean;

  max?: number;
  min?: number;

}
export function isEmail(value: string): boolean {
  return regex.email.test(value);
}
export function isUrl(value: string): boolean {
  return regex.url.test(value);
}
export function isHex(value: string): boolean {
  return regex.hex.test(value);
}
export function isIp(value: string): boolean {
  return regex.ip.test(value);
}
export function isPhone(value: string): boolean {
  return regex.phone.test(value);
}
export function isEmpty(value: string): boolean {
  return value.length == 0;
}
export function fitsMax(value: string, max: number): boolean {
  return value.length <= max;
}
export function fitsMin(value: string, min: number): boolean {
  return value.length >= min;
}

export default function validate(value: string, config: Config) {
  if(config.isEmail == true && !isEmail(value)) return false
  if (config.isUrl == true && !isUrl(value)) return false
  if (config.isHex == true && !isHex(value)) return false;
  if (config.isIp == true && !isIp(value)) return false;
  if (config.isEmpty == true && !isEmpty(value)) return false;
  if(config.max && !fitsMax(value, config.max)) return false;
  if (config.min && !fitsMin(value, config.min)) return false;

  return true;
}
