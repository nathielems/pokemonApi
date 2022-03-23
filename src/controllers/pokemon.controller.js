const axios = require('axios');
const hostname = 'http://pokeapi.co/api/v2/pokemon/'

const getByName = async (req, res) => {
  const { name } = req.query

  try {
    const { data } = await axios.get(`${hostname}${name}`)

    const { abilities, sprites } = data

    const pokemon = {
      abilities: abilities.map(a => a.ability.name).sort(),
      image: sprites.front_default
    }

    return res.status(200).send(pokemon)
  }
  catch(e) {
    return res.status(404).send({message: "Não consta pokemon com este nome."})
  }
}

module.exports = {
  getByName
}