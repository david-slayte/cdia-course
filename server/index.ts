import * as express from 'express'
import * as expressHandlebars from 'express-handlebars'

const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

export default app
