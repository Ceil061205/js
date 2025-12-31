class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setCache(key, value) {
    if (!value) {
      throw new Error("value is required");
    }
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
    return value;
  }
  getCache(key) {
    // JSON.parse 如果不存在会直接报错
    const res = this.storage.getItem(key);
    if (res) {
      return JSON.parse(res);
    }
    return this.storage.getItem(key);
  }
  removeCache(key) {
    this.storage.removeItem(key);
  }
  clearCache() {
    this.storage.clear();
  }
}

const cache = new Cache();
const sessionCache = new Cache(false);