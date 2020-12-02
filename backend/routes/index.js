const express = require('express');
const router = express.Router();
// import {} from '../controllers/<replace>'

router.get('/', (req, res) => res.send('Hello'));

module.exports = router;

/////////////////////////////////
// E X H I B I T   R O U T E S //
/////////////////////////////////
// router.get('/exhibit',getExhibits)
// router.get('/exhibit/:id', getUserExhibit)
// router.put('/exhibit/:id/edit', editExhibit)

/////////////////////////////////
// E X P L O R E   R O U T E S //
/////////////////////////////////
// router.get('/explore', getArtwork)
// router.get('/results/description=desc', searchArt)
// router.get('/artwork/:id', getArtwork)
// router.post('/artwork/:id', addArtwork)
// router.get('/', <replace>)
// router.get('/', <replace>)