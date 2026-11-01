const R={
  btd:{e:'🎬',n:"Born to Die",cor:'#b3202f',t:"Dramática e apaixonada: você ama tudo com cinema e intensidade."},
  ultra:{e:'🌴',n:"Ultraviolence",cor:'#6b5b4a',t:"Misteriosa e sombria: você tem um charme que ninguém decifra."},
  nfr:{e:'🖼️',n:"Norman F***ing Rockwell!",cor:'#d9c7a3',t:"Nostálgica e observadora: você enxerga poesia nas coisas simples."},
  ocean:{e:'🛣️',n:"Ocean Blvd",cor:'#7fa7a0',t:"Profunda e reflexiva: você carrega histórias e memórias de longe."}
};
const Q=[
  ["Qual é o seu clima?",[["Dramática e apaixonada",'btd'],["Misteriosa e sombria",'ultra'],["Nostálgica e observadora",'nfr'],["Profunda e reflexiva",'ocean']]],
  ["Qual seria o seu programa ideal?",[["Assistir a um filme antigo",'btd'],["Dirigir à noite",'ultra'],["Passear pela praia ao pôr do sol",'nfr'],["Escrever num caderno",'ocean']]],
  ["Qual cor você prefere?",[["Vermelho",'btd'],["Marrom",'ultra'],["Bege e creme",'nfr'],["Verde-água",'ocean']]],
  ["Qual palavra define você?",[["Paixão",'btd'],["Mistério",'ultra'],["Nostalgia",'nfr'],["Memória",'ocean']]],
  ["Qual roupa você escolhe?",[["Vestido vermelho",'btd'],["Jaqueta de couro",'ultra'],["Camisa vintage",'nfr'],["Vestido longo e leve",'ocean']]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>'+r.n+'</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
