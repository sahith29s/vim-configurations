const getAllProducts = async (req, res) =>{
    res.json({msg : "I am getAll products"})
}

const getAllProductsTesting = async (req, res) =>{
    res.json({ msg : " I am getAllProcutsTesting"})
}

module.exports = {getAllProducts , getAllProductsTesting}