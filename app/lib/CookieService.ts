import Cookies from 'js-cookie'
export class CookieService {
  public static setItem(key: string, value: any): void {
    Cookies.set(key, JSON.stringify(value));
  }

  public static getItem(key: string): any {
    const value = Cookies.get(key);
    return value ? JSON.parse(value) : null;
  }

  public static removeItem(key: string): void {
    Cookies.remove(key);
  }
}
