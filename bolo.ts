interface Newbolo {
     tamanho : number;
     sabor: string ;
     formato : string ;
     recheio : string;
     cobertura : string ;
     valor : number;
     


}
    class Bolo {
    private tamanho : number;
    private sabor: string ;
    private formato : string ;
    private recheio : string;
    private cobertura : string ;
    private valor : number;
    private qtdfatias = 0

    public get  fatias(){
      return this.qtdfatias;
    }
    

    constructor({tamanho ,sabor ,formato ,recheio ,cobertura , valor }: Newbolo){
 // todo :criar o construtor
        this.cobertura = cobertura;
        this.formato = formato ;
        this.recheio = recheio ;
        this.tamanho = tamanho ;
        this.sabor = sabor ;
        this.valor = valor ;

        
    }
     public Fatiar (qtdfatias : number){
          
     this.qtdfatias = qtdfatias;
     
     }
     public tirarFatia (){
          this.qtdfatias--;

     }

}
export {Bolo};
