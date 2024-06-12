function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> você se chama Joana, tem 29 anos e está de mudança com sua familia,seu marido Jhon e seu filhos Pipher,voçê está muito animada com a mudança </h3>';
  formation += ' <img src="t/1.png" class="imgs">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()">continuar</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>sua casa e sua familia </h3>';
  formation += ' <img src="t/pldsa.png">';
  formation += ' <img src="t/3.png" class="imgs">';
  formation += '<br>';
  formation += '<button onclick="Escolha2()">continuar</button>';
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>está anoitecendo e voçê decide fazer o jantar,voçês comem e vc vai por o Pipher na cama. </h3>'
  formation += ' <img src="t/4.png" class="imgs">';
  formation += '<button onclick="Escolha3()">continuar</button>';
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha3() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> No outro dia você o leva para a creche e vai para o trabalho, só que derrepente ao meio dia vc recebe uma ligação da diretora dizendo que seu filho Pipher bateu em um colega e um desenho estranho ele fez, voçê foi buscalo e chegando em casa o questiona.<h3>';
  formation += '<br>';
  formation += ' <img src="t/5.png" class="imgs">';
  formation += ' <img src="t/0.png" id="img0">';
  formation += '<button onclick="Escolha4()">questionar</button>';
  $(".principal").append(formation);
}

function Escolha4() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Ele grita com vc, algo q ele nunca fez e vc pergunta o porque ele bateu no seu colega e ele diz </h3>'
  formation += ' <img src="t/f.png" class="imgs">';
  formation += '<br>'
  formation += '<h3> - Não foi eu !... ele... ele me forçou!<h3>';
  formation += '<button onclick="Escolha5()">Quem é "ele"??</button>';
  $(".principal").append(formation);
}

function Escolha5() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>ele n fala muito sobre ele mas.. disse que sou parecido com vc. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha6()">continuar</button>';
  $(".principal").append(formation);
}

function Escolha6() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> você descide ligar para sua mãe e explica o que aconteceu  e durante a conversa ela fala sobre sua infância e vc finalmente entende o que está acontecendo, então vc decide procurar no seu baú de infância e encontra uma foto sua com seu amigo bob que foi encontrado morto em um lago proximo a casa de voçês mas derrepente... vc escuta um grito que pareçe ser de Jhon e seu filho está parado atrás de você mas você já sabe q quem está ali não é o Pipher e sim... BOB   </h3>'
  formation += '<img src="t/ft.png" class="imgs">';
  formation += '<button onclick="Escolha7()">Continuar</button>';
  $(".principal").append(formation);
}


function Escolha7() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> voçê grita com BOb e manda deixa_la em paz mas isso só faz com que ele fique infurecido e começar a subir pelas paredes e vir na sua direção e voçê tem duas opções.. . </h3>'
  formation += '<br>'
  formation += '<video src="t/v.mp4" class="video"></video>';
  formation += '<img src="t/x.png" class="imgs">';
  formation += '<button onclick="Escolha8()">pegar o crucifixo e exorciza_lo</button>';
  formation += '<button onclick="Escolha9()">pegar a faca q voçê abriu o baú e matar Bob</button>';
  $(".principal").append(formation);
}

function Escolha8() {
  var formation = ''
  formation += '<img src="t/xu.png" class="imgs">';
  formation += '<br>';
  formation += '<h3> voçê o exorcisou mas agora BOb está a solta em sua casa e vc tem que agir rápido para se salvar. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha12()">fugir de casa"</butoon>';

  $(".principal").append(formation);
}

function Escolha9() {
  var formation = ''
  formation += '<br>';
  formation += '<h3>voçê tentou matar bob mas matou o hospedeiro o seu filho Pipher, vc foi presa por assasinato e agora Bob vive em vc.... vc perdeu.</h3>'
  formation += '<br>'
  formation += ' <img src="t/morte.png "  class="imgs">';
   formation += ' <img src="t/pris.png "  class="imgs">';
  formation += '<button onclick="continuar()">Recomeçar</button>';
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = ''
  formation += '<br>';
  formation += '<h3>voçê fugiu com Pipher mas ainda não resolveu o problema, você decide ir até o túmulo de bob e por um fim nisso  </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha13()">continuar</button>';
  $(".principal").append(formation);
}

function Escolha13() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> você chega no túmulo de Bob e decide.... </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha14()">Quebrar o túmulo e mandar Bob chupar cana com palha.</button>';
  formation += '<button onclick="Escolha15()">Colocar flores com uma carta explicando para Bob o pq vcs se separaram.</button>';
  $(".principal").append(formation);
}

function Escolha14() {
  var formation = '';
  formation += '<br>';
  formation += ' <img src="t/tq.png "  class="imgs">';
  formation += ' <img src="t/pos.png "  class="imgs">';
  formation += '<h3> Bob te possuiu te paralisando  e te jogando no lago assim fazendo vc morrer, seu filho Pipher é levado para o orfanato e seu marido Jhon desapareceu...fim vc perdeu</h3>'
  formation += '<br>'
  formation += '<button onclick="continuar()">recomeçar</button>';
  $(".principal").append(formation);
}

function Escolha15() {
  var formation = '';
  formation += '<br>';
  formation += ' <img src="t/tc.png "  class="imgs">';
  formation += '<h3> Você fez com q Bob entendesse e ele agradece e finalmente descansa.</h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha16()">continuar</button>';
  $(".principal").append(formation);
}

function Escolha16() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você salvou sua família  e libertou Bob, agora todo domingo vc e sua familia vão para a igreja.. fim .</h3>'
  formation += '<br>'
  formation += ' <img src="t/final.png "  class="imgs">';
  $(".principal").append(formation);
}
