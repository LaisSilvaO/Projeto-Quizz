//////const model = require("../models/mercadoria.js")
function verificaMercadoria(mercadoria){
    if(mercadoria.nome.length<5) return 'O nome deve ter mais de 5 letras'
    return 'ok'
}

function getMercadoria(req,res){
    model.getMercadorias()
    .then((Mercadorias)=>{
        console.log(Mercadorias)
        res.status(200).send(Mercadorias)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send(err)
    })
}
    function incluiMercadoria(req,res){
        var novo=req.body;
        var confere=verificaMercadoria(novo)
        if(confere=='ok'){
            model.incluiMercadoria(novo)
            .then((result)=>{
                res.status(200).send(result)
            })
            .catch((err)=>{
                res.status(400).send(err)
            })
        }else{
            res.status(400).send(confere)
        }
    }


    function alteraMercadoria(req,res){
        var novo=req.body;
        var confere=verificaMercadoria(novo)
        if(confere=='ok'){
            model.alteraMercadoria(novo)
            .then((result)=>{
                res.status(200).send(result)
            })
            .catch((err)=>{
                res.status(400).send(err)
            })
        }else{
            res.status(400).send(confere)
        }
    }

    function apagaMercadoria(req,res){
        var id=req.params.id;
        model.apagaMercadoria(id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    }


    module.exports = {
        getMercadoria, 
        incluiMercadoria, 
        alteraMercadoria, 
        apagaMercadoria};
/*export const ControleNomes = {
    getNome: (req, res) => {
        // Sua lógica para obter nomes
      },
      IncluirNome: (req, res) => {
        // Sua lógica para incluir nome
      },
      apagaNome: (req, res) => {
        // Sua lógica para apagar nome
      }
    };
    */