const db = require("../../../db");

module.exports = {
  Usuario: {
    telefone(Obj){
      // console.log(Obj);
       return Obj.telefone_fixo;
   },    
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil_id);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    usuarios: () => db.usuarios,
  },
};