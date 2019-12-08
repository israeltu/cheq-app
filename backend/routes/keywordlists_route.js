const express=require('express');
const keywordlists=express.Router();
const {authenticateToken}=require('../routes/users_route');
const KeywordList=require('../model/Keywordlist');


//Get_all keywords
keywordlists.get('',authenticateToken,(req,res)=>{
  
    KeywordList.findAll().then(k => res.json(k));
  });

//Create keyword
keywordlists.post('' ,authenticateToken,(req,res)=>{

  KeywordList.create(req.body)
    .then(k => res.json(k))
    .catch(({errors})=> {
        const list=[]; 
        errors.forEach(element => list.push(element.message)); 
        res.status(400).send(list);}
    );   

});

//Update keyword
keywordlists.put('/:id',authenticateToken,(req,res)=>{

    KeywordList.update(req.body,{where: {id:req.params.id}}).then((rowsUpdate)=>{
      if (rowsUpdate==0) return res.status(404).send('The keyword with the given id was not found');
      KeywordList.findByPk(req.params.id).then(k=>res.json(k))})
      .catch(({errors})=> {
          const list=[]; 
          errors.forEach(element => list.push(element.message)); 
          res.status(400).send(list);}
      );
 
});

//delete keyword
keywordlists.delete('/:id',authenticateToken,(req,res)=>{

    KeywordList.destroy({where: {id:req.params.id}}).then((rowsDeleted)=>{
       if (rowsDeleted==0) return res.status(404).send('The keyword with the given id was not found');
       res.status(200).send('Keyword deleted')})
       .catch(({errors})=> {
        const list=[]; 
        errors.forEach(element => list.push(element.message)); 
        res.status(400).send(list);}
    );   
});

module.exports=keywordlists;