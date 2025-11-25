import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hono!')
})

serve(app, ({ address, port }) => {
  console.info('Listening on', address, port)
})
