var User = require('../../models/users.model')

module.exports.index = async (req, res) => {
    
    var users = await User.find()

    res.json(users)
}

module.exports.getId = async (req, res) => {
    var idViews = req.params.id;

    var user = await User.findOne({_id: idViews})

    res.json(user)
}