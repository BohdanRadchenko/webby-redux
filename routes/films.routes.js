const {Router} = require("express");
const config = require("config");
const router = Router();
const Film = require("../models/Film");

// get /api/films    // GET ALL FILMS
router.get("/films/:page", async (req, res) => {
  try {
    const perPage = config.PER_PAGE;
    const page = req.params.page || 1;

    //mongoose pagination
    const myCustomLabels = {
      docs: 'itemsList',
      totalDocs: 'itemCount',
      page: 'currentPage',
      totalPages: 'pageCount',
      pagingCounter: 'slNo',
      meta: 'paginator'
    };

    const options = {
      page: page,
      limit: perPage,
      customLabels: myCustomLabels
    };

    Film.paginate({}, options, function(err, result) {
      res.status(200).json({
        items : result.itemsList,
        count : result.paginator.pageCount,
        currentPage : result.paginator.currentPage,
      })
    });


    //work
    // Film.find({})
    //   .skip(perPage * page)
    //   .limit(perPage)
    //   .exec((err, films) => {
    //     if (err) {
    //       res.status(500).json(err);
    //       return;
    //     }
    //     res.status(200).json(films)
    //   });

    //work!
    // const films = await Film.find()

    console.info('get all flms')
    // res.json(films);
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});

// get /api/films:id    // GET ONE FILMS BY ID
router.get("/films/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    console.info('get film by id');
    res.json(film);
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});

// post /api/films    // CREATE FILMS
router.post("/films", async (req, res) => {
  try {
    const {name, release, format, stars} = req.body;
    const film = new Film({
      name,
      release,
      format,
      stars
    });

    await film.save();
    console.info(`Create new film "${req.body.name}" `)
    res.status(201).json(film)
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});

// delete /api/films/:id    // DELETE FILMS
router.delete("/films/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id).deleteOne();
    console.info(`Film with ID ${req.params.id} deleted`)
    res.status(200).json({
      message: `Successfully deleted`
    });
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});

// find /api/search?:query    // FIND FILMS
router.get("/search?:query", async (req, res) => {

  try {
    const srt = req.query.stars
    const name = req.query.name
    const films = await Film.find({name: name})

    console.info('find flms by query')
    res.json(films);
    res.status(200).json({
      message: "Successfully find films by query ",
      films: films
    });
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});

// get /api/deleteAll   // delete all films
router.delete("/deleteAll", async (req, res) => {
  try {
    const fn = async () => {
      const films = await Film.find()
      films.map(el => {
        const del = async () => {
          await Film.findById(el._id).deleteOne()
        }
        del()
      })
    }
    fn()
    console.log(`Deleted All films`)
    res.status(200).json({
      message: `All Films Deleted`
    });
  } catch (e) {
    res.status(500).json({message: "Something worn wrong, try again"});
  }
});


module.exports = router;
