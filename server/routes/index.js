const auth = require('./auth')
const user = require('./users')
const { Dropbox, ThumbnailFormatPng, ThumbnailSizeW128h128 } = require('dropbox')

const router = require('express').Router()
router.route('/').get(async (req, res) => {
  const { DROPBOX_API_KEY, DROPBOX_API_SECRET, DROPBOX_API_ACCESS_TOKEN } = process.env

  let dbx = new Dropbox({
    clientId: DROPBOX_API_KEY,
    clientSecret: DROPBOX_API_SECRET,
    accessToken: DROPBOX_API_ACCESS_TOKEN
  })

  try {
    let { result: file } = await dbx.filesListFolder({ path: '' })
    let { result } = await dbx.filesGetThumbnail({
      path: file.entries[0].path_display,
      format: ThumbnailFormatPng,
      size: ThumbnailSizeW128h128
    })
    // console.log(result.fileBinary)
    res.status(200).send(JSON.stringify({ ok: true, thumbs: result.fileBinary }))
    console.info('{ ok: true }')
  } catch (e) {
    res.status(500).send(JSON.stringify({ error: e }))
    console.error(e)
  }
})

exports.router = app => {
  app.use('/api/auth', auth)
  app.use('/api/user', user)
  app.use('/api', router)
}
