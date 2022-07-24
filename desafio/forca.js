class Forca {
  constructor(palavraSecreta) { // Atributos da forca
    this.palavraSecreta = palavraSecreta;
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavraCerta = [];
    this.estado = "aguardando chute";
    this.contadorPrimeiraRodada = 0;
  }
 
  chutar(letra) {
  this.criarTracosDaForca(letra);
  this.contadorPrimeiraRodada = 1;
  this.palavraSecreta = this.palavraSecreta.split(''); // Transforma a palavra secreta em array
  
  if (letra.length > 1) { // Verifica se o chute tem mais se um caractere
    this.palavraSecreta = this.palavraSecreta.join(''); // Transforma a palavra secreta em String de novo
    return 

  } else {
    if (this.letrasChutadas.includes(letra) == true) { // Verifica se a letra já foi chutada
    this.palavraSecreta = this.palavraSecreta.join('');
    return 

    } else{ // Se tudo for validado entra no programa normalmente
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
    
        if (this.palavraCerta.includes(this.palavraSecreta)) { // Se a palavra certa for igual a palavra secreta o jogador vence
          this.estado = "ganhou";
        }

      } else if(this.contadorLetrasCertas == 0) { // Se o contador for igual a zero  indica que a pessoa errou
        this.retirarVidas();  
      }

      this.verificarSeGanhou(); // Chamada da função para ver se o jogador ganhou

    }
    this.palavraSecreta = this.palavraSecreta.join("")
   } 
  } 
  
  buscarEstado() {
    if (this.estado == "perdeu") {
      return "perdeu"
    } else if (this.estado == "ganhou") {
      return "ganhou"
    } else if (this.estado == "aguardando estado") {
      return "aguardando estado"
      }
     
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraCerta, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

  criarTracosDaForca(letra){ // Cria os Traços da Forca de acordo com o tamanho da String
    if (this.contadorPrimeiraRodada == 0) { // Verifica se é a primeira rodada do jogo ainda
      for (let i = 0; i < this.palavraSecreta.length; i++) { 
        this.palavraCerta.push("_");
        continue
      }
    } 
    return

  }

  adicionarLetrasChutadas(letra) {
    this.letrasChutadas.push(letra);
  }

   adicionarLetrasAcertadas(letra) {
    for (let i = 0; i < this.palavraSecreta.length; i++) {  // Adiciona a letra do chute nas posições corretas no array da palavra certa
      if (letra == this.palavraSecreta[i]){
        this.palavraCerta.splice(i, 1, letra);
        continue
      } 
    }
  }

  retirarVidas() { 
    if (this.vidas == 1) { // Verifica se o jogador perdeu
      this.estado = "perdeu";
    }
    this.vidas--; // Se ele não perdeu retira uma vida
  }

  verificarSeGanhou(){ // Verifica se o jogador ganhou
    if(JSON.stringify(this.palavraCerta) === JSON.stringify(this.palavraSecreta) && this.vidas > 0) {
      this.estado = "ganhou";
    }
    return
  }
}

module.exports = Forca;