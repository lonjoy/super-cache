/**
 * Super-Cache
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

var CacheManager = require('./lib/manager');
var MemoryStore = require('./lib/store/memory');
var MemcacheStore = require('./lib/store/memcache');


module.exports = exports = CacheManager;
exports.MemoryStore = MemoryStore;
exports.MemcacheStore = MemcacheStore;

exports.create = function (options) {
  return new CacheManager(options);
};
