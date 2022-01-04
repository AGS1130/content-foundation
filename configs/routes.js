/**
 * Routes is an array holding objects with `source`, `destination`, and `permanent` properties:
 * - `source` is the incoming request path pattern.
 * - `destination` is the path you want to route to.
 * - `permanent` if `true` will use the 308 status code which instructs clients/search engines to cache the redirect forever,
 *   if `false` will use the 307 status code which is temporary and is not cached.
 * - `basePath`: `false` or `undefined` - if false the basePath won't be included when matching, can be used for external rewrites only.
 * - `locale`: `false` or `undefined` - whether the locale should not be included when matching.
 * - `has` is an array of has objects with the `type`, `key` and `value` properties.
 */
module.exports = []