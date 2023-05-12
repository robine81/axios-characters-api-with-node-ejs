const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

// Render a form to create a new character.
router.get('/characters/create-character', (req, res) => {
    res.render('characters/create-character')
  });

/*POST create character */
/* Continue here with CREATE*/
router.post("/create-character", (req, res, next) => {
        const characterInfo = req.body;

        apiService
        .createCharacter(characterInfo)
        .then((response) => {
        res.json(response.data);
        // res.redirect('/movie-characters/list'); // <== leave this line commented for now
        })
        .catch((error) => console.log(error));
})


router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

module.exports = router;


// https://ih-crud-api.herokuapp.com/characters