import { $Database, teenyHono, OpenApiExtension, PocketUIExtension, Hono } from 'teenybase'
import config from 'virtual:teenybase'
import { HTML_B64, SUPPORT_B64, DSBUNDLE_B64, CSS_B64, AVATAR_B64 } from './cv-assets.ts'

function bytes(b64) {
  const bin = atob(b64)
  const n = bin.length
  const a = new Uint8Array(n)
  for (let i = 0; i < n; i++) a[i] = bin.charCodeAt(i)
  return a
}
const send = (c, b64, type, maxAge) =>
  c.body(bytes(b64), 200, { 'content-type': type, 'cache-control': 'public, max-age=' + maxAge })

const userApp = new Hono()
userApp.get('/', (c) => send(c, HTML_B64, 'text/html; charset=utf-8', 60))
userApp.get('/support.js', (c) => send(c, SUPPORT_B64, 'application/javascript; charset=utf-8', 86400))
userApp.get('/ds-bundle.js', (c) => send(c, DSBUNDLE_B64, 'application/javascript; charset=utf-8', 86400))
userApp.get('/cv-ds.css', (c) => send(c, CSS_B64, 'text/css; charset=utf-8', 86400))
userApp.get('/avatar.png', (c) => send(c, AVATAR_B64, 'image/png', 86400))
userApp.get('/robots.txt', (c) => {
  const url = new URL(c.req.url)
  return c.text('User-agent: *\nAllow: /\n\nSitemap: ' + url.protocol + '//' + url.host + '/sitemap.xml\n', 200, { 'cache-control': 'public, max-age=3600' })
})
userApp.get('/sitemap.xml', (c) => {
  const url = new URL(c.req.url)
  const site = url.protocol + '//' + url.host
  return c.body('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>' + site + '/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n', 200, { 'content-type': 'application/xml', 'cache-control': 'public, max-age=3600' })
})

const app = teenyHono(async (c) => {
  const db = new $Database(c, config, c.env.TEENY_PRIMARY_DB, c.env.TEENY_PRIMARY_R2)
  await db.registerExtension(new OpenApiExtension(db, true))
  await db.registerExtension(new PocketUIExtension(db))
  return db
})
app.route('/', userApp)

export default app
