import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app.use('/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.text('Hono!')
})

serve(app, ({ address, port }) => {
  console.info('Listening on', address, port)
})
