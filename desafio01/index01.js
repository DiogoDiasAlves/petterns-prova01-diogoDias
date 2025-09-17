//aqui é Factory
class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class Bicicleta {
    move() {
      return "Andando de bicicleta e chegando na UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete e chegando na UNISATC";
    }
  }
  
  class TransporteFactory {
    static createTransporte(tipo) {
      if (tipo === "bicicleta") {
        return new Bicicleta();
      } else if (tipo === "patinete") {
        return new Patinete();
      } else if (tipo === "onibus") {
        return new Onibus();
      } else {
        throw new Error("Transporte desconhecido!");
      }
    }
  }
  

  const tipo = "onibus";
  const transporte = TransporteFactory.createTransporte(tipo);
  
  console.log(transporte.move());
  