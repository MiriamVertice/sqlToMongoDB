const mongoose = require('mongoose');

const CeldaSchema = new mongoose.Schema({
  mysqlId: { type: Number, required: true }, 
  idTablaMysql: { type: Number },           
  coordenada: { type: String },             
  align: { type: String },             
  valign: { type: String },            
  bgcolor: { type: String },              
  class: { type: Number },                   
  colspan: { type: String },                
  rowspan: { type: String },                
  visible: { type: String },                 
  contenido: { type: String },               
  idObjetoMysql: { type: Number },          
  embeds: { type: Number },                 
  width: { type: String },                  
  height: { type: String }                   
});

module.exports = mongoose.model('Celda', CeldaSchema);
