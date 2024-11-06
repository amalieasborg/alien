// controllers/alienController.js
const Alien=require('../models/alienModel');

//Tilføjer ny alien
exports.createAlien = async (req, res) => {
    try{
        const newAlien=new Alien({
            name: req.body.name,
            race: req.body.race,
            planet: req.body.planet,
            abilities: req.body.abilities
        });
        await newAlien.save();
        res.redirect('/');
    }catch(err){
        console.error("Fejl ved tilføjelse af alien: ", err);
        res.status(500).send("Fejl ved tilføjelse af alien.");
    }
};

//Henter alle aliens og viser dem
exports.getAllAliens = async (req, res) => {
    try{
        const aliens=await Alien.find();
        res.render('index',{ aliens });
    } catch(err){
        console.error("Fejl ved hentning af film: ", err);
        res.status(500).send("Fejl ved hentning af film.")
    }
};

//Opdaterer en alien
exports.updateAlien = async (req, res) => {
    try{
        await Alien.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            race: req.body.race,
            planet: req.body.planet,
            abilities: req.body.abilities
        });
        res.redirect('/');
    }catch (err){
        console.error("Fejl ved opdatering af alien: ", err);
        res.status(500).send("Fejl ved opdatering af alien.");
    }
};

//Sletter en alien
exports.deleteAlien= async (req, res) => {
    try{
        await Alien.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch (err){
        console.error("Fejl ved sletning af alien: ", err);
        res.status(500).send("Fejl ved sletning af alien.");
    }
};
