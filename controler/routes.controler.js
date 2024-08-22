//This file is just for testing purpose :)
let operations = {}

operations.display = (req,res)=>{
    res.send("This is from conmtroler display !")
}

operations.create = (req,res)=>{
    res.send("This is from conmtroler create !")
}

operations.update = (req,res)=>{
    res.send("This is from conmtroler update !")
}

operations.delete = (req,res)=>{
    res.send("This is from conmtroler delete !")
}

module.exports = operations