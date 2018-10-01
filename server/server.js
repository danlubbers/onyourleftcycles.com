dotenv = require('dotenv').config()

const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = new express()
    , contentful = require('contentful')

ReactDOMServer.renderToString(<Handler />);
const helmet = Helmet.renderStatic();

app.use(bodyParser.json())
app.use(cors())

// This is for the NPM RUN BUILD
app.use(express.static(__dirname + '/../build'))

const client = contentful.createClient({
    space: 'mi63ncym1bm5',
    accessToken: 'bc8f1c5df7025a43ef6477fc5f29a9de736de20bc66378c93fd5674531e5f87e'
  })
  
  const asset = client.getAsset('<asset_id>')
    .then((asset) => console.log(asset.fields.file.url))

// Port
app.listen(3000, _ => {
    console.log(`Everything is running on PORT 3000`)
})