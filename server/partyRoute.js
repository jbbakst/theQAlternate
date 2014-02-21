var models = require('./models');

exports.getParties = function(req, res) {
    models.Party
        .find({}, function(parties) {
            console.log(parties.toObject());
            res.send(parties.toObject());
        });
}

exports.addParty = function(req, res) {
    var newParty = new models.Party({
        "id": 5,
        "name": req.body.name,
        "numPeople": 1,
        "numSongs": 0,
        "currSongID": 0,
        "queue": []
    });
    newParty.save(function() {
        res.send(newParty.toObject());
    });
}