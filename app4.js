

class Aluno () {

  constructor (primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto(primeiroNome,segundoNome){
    return (
      primeiroNome + segundoNome;
    )
  }

  media(primeiraNota,segundaNota){
    var media = (primeiraNota * 0,6) + (segundaNota * 0,4);
    return media;
  }


  situacao(media) {
    if (media >= 6){
      window.alert("Aprovado");
    }else {
      window.alert("Reprovado")
    }
  }

}