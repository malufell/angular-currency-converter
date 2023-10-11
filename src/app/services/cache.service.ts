import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  setLocalStorageWithExpiry(
    key: string,
    value: any,
    expirationTimeInMilliseconds: number,
  ): void {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + expirationTimeInMilliseconds,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }

  getLocalStorageWithExpiry(key: string): any {
    const itemFromLocalStorage = localStorage.getItem(key);

    if (!itemFromLocalStorage) return null;

    const item = JSON.parse(itemFromLocalStorage);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item;
  }

  updateLocalStorage(
    key: string,
    value: any,
    expirationTimeInMilliseconds: number,
  ): void {
    const dataFromStorage = this.getLocalStorageWithExpiry(key);

    const cache = dataFromStorage?.value.map((item: any) => {
      if (item.code !== value.code) return item;
    });

    if (cache) {
      cache.push(value);
      dataFromStorage.value = cache;
      localStorage.setItem(key, JSON.stringify(dataFromStorage));
      return;
    }

    this.setLocalStorageWithExpiry(key, [value], expirationTimeInMilliseconds);
  }
}
