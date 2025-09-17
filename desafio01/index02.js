//aqui é builder
class Lanche {
    constructor(builder) {
      this.pao = builder.pao;
      this.carne = builder.carne;
      this.queijo = builder.queijo;
      this.salada = builder.salada;
      this.molho = builder.molho;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    comPao(pao) {
      this.pao = pao;
      return this; 
    }
  
    comCarne(carne) {
      this.carne = carne;
      return this;
    }
  
    comQueijo(queijo) {
      this.queijo = queijo;
      return this;
    }
  
    comSalada(salada) {
      this.salada = salada;
      return this;
    }
  
    comMolho(molho) {
      this.molho = molho;
      return this;
    }
  
    build() {
      return new Lanche(this); 
    }
  }
  

  const lancheSimples = new LancheBuilder()
    .comPao(true)
    .comCarne(true)
    .build();
  
  const lancheCompleto = new LancheBuilder()
    .comPao(true)
    .comCarne(true)
    .comQueijo(true)
    .comSalada(true)
    .comMolho(true)
    .build();
  
  lancheSimples.show();
  lancheCompleto.show();
  