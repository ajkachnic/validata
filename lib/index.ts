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
  if (typeof value == "string") {
    return regex.email.test(value);
  }
  return false;
}
export function isUrl(value: string): boolean {
  if (typeof value == "string") {
    return regex.url.test(value);
  }
  return false;
}
export function isHex(value: string): boolean {
  if (typeof value == "string") {
    return regex.hex.test(value);
  }
  return false;
}
export function isIp(value: string): boolean {
  if (typeof value == "string") {
    return regex.ip.test(value);
  }
  return false;
}
export function isPhone(value: string): boolean {
  if (typeof value == "string") {
    return regex.phone.test(value);
  }
  return false;
}
export function isEmpty(value: string): boolean {
  if (typeof value == "string") {
    return value.length == 0;
  }
  return false;
}
export function fitsMax(value: string, max: number): boolean {
  if (typeof value == "string") {
    return value.length <= max;
  }
  return false;
}
export function fitsMin(value: string, min: number): boolean {
  if (typeof value == "string") {
    return value.length >= min;
  }
  return false;
}

export default function validate(value: string, config: Config) {
  if (typeof value != "string") return false;
  if (config.isEmail == true && !isEmail(value)) return false;
  if (config.isUrl == true && !isUrl(value)) return false;
  if (config.isHex == true && !isHex(value)) return false;
  if (config.isIp == true && !isIp(value)) return false;
  if (config.isEmpty == true && !isEmpty(value)) return false;
  if (config.max && !fitsMax(value, config.max)) return false;
  if (config.min && !fitsMin(value, config.min)) return false;

  return true;
}
