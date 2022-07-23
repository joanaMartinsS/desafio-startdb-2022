class Forca {
  constructor(palavraSecreta) { // * Não entendo pq isso funciona
    // * Atributos da Forca
    this.palavraSecreta = palavraSecreta;
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavraCerta = [];
    this.estado = "aguardando chute";
   
  }
 
 

  chutar(letra) { 
  this.criarTracosDaForca(letra);
  this.palavraSecreta = this.palavraSecreta.split('');
 
  if (letra.length > 1) {
    console.log("Chute Inválido");
    this.palavraSecreta = this.palavraSecreta.join('');
    return
  } else {
    if (this.letrasChutadas.includes(letra) == true) { // Verifica se a letra já foi chutada
      this.palavraSecreta = this.palavraSecreta.join('');
      return // Se sim volta para o chute de novo
    } else{
      this.adicionarLetrasChutadas(letra);
      this.contadorLetrasCertas = 0;
  
      for (let i = 0; i < this.palavraSecreta.length; i++) { // Verifica se a letra chutada está contida na palavraSecreta
        if (letra == this.palavraSecreta[i]){ // Se estiver contida adicionar 1 no contador de letras certas
          this.contadorLetrasCertas++;
          break
        }
      }
  
      if(this.contadorLetrasCertas >= 1){ // Se o contador de letras certas for maior que 1 indica que a pessoa acertou
        
        this.adicionarLetrasAcertadas(letra);
        
    
        if (this.palavraCerta.includes(this.palavraSecreta)) {
          this.estado = "ganhou";
        }
      } else if(this.contadorLetrasCertas == 0) { // Se o contador for igual a zero  indica que a pessoa errou
        
        this.retirarVidas();
          
      }
      this.verificarSeGanhou();
    }
    
    
    this.palavraSecreta = this.palavraSecreta.join("")
  }

    
  } 
  // Função Original: buscarEstado() { return "perdeu"} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  buscarEstado() {
    if (this.estado == "perdeu") {
      return "perdeu"
    } else if (this.estado == "ganhou") {
      return "ganhou"
    } 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraCerta, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

  // * Pronto
  criarTracosDaForca(letra){
    if (this.letrasChutadas.length == 0) {
      for (let i = 0; i < this.palavraSecreta.length; i++) { 
        this.palavraCerta.push("_");
        continue
      }
    } return

  }

  // * Pronto
  adicionarLetrasChutadas(letra) {
    this.letrasChutadas.push(letra);
  }

   // * Pronto
   adicionarLetrasAcertadas(letra) {
   
    for (let i = 0; i < this.palavraSecreta.length; i++) { // * For enquanto i for menor que a quantidade de caracteres de this.palavraSecreta 
      if (letra == this.palavraSecreta[i]){
        this.palavraCerta.splice(i, 1, letra);
        continue
      } 

      //JSON.stringify(a1) === JSON.stringify(a2)
    }
  }

  // * Pronto
  retirarVidas() {
    if (this.vidas == 1) {
      this.estado = "perdeu";
    }
    this.vidas--;
  }

  verificarSeGanhou(){
    if(JSON.stringify(this.palavraCerta) === JSON.stringify(this.palavraSecreta) && this.vidas > 0) {
      this.estado = "ganhou";
    }
    return
  }

  /*verificarChuteUmCaracter(letra){
    
  }*/

 

  

  

}

module.exports = Forca;