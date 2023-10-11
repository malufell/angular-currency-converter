import { TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and retrieve data from local storage with expiry', () => {
    const key = 'testKey';
    const value = { foo: 'bar' };
    const expirationTime = 1000; // 1 second
    service.setLocalStorageWithExpiry(key, value, expirationTime);

    const storedData: any = localStorage.getItem(key);
    const parsedData = JSON.parse(storedData);

    expect(parsedData).toEqual(
      jasmine.objectContaining({
        value: value,
        expiry: jasmine.any(Number),
      }),
    );
  });

  it('should return null if data is expired', async () => {
    const key = 'testKey';
    const value = { foo: 'bar' };
    const expirationTime = 1; // 1 millisecond
    service.setLocalStorageWithExpiry(key, value, expirationTime);

    // Wait for expiration
    await new Promise((resolve) => setTimeout(resolve, 2));

    const retrievedValue = service.getLocalStorageWithExpiry(key);
    expect(retrievedValue).toBeNull();
  });
});
