const ALBUNS=[
  [2012,'🎬',"Born to Die",'#b3202f',"Tem \"Video Games\" e \"Summertime Sadness\"."],
  [2014,'🌴',"Ultraviolence",'#6b5b4a',"Foi produzido por Dan Auerbach."],
  [2015,'🌊',"Honeymoon",'#9ec9d9',"Tem \"High by the Beach\"."],
  [2017,'🌙',"Lust for Life",'#f0b6c8',"Tem participações de The Weeknd e Stevie Nicks."],
  [2019,'🖼️',"Norman F***ing Rockwell!",'#d9c7a3',"Tem \"Venice Bitch\" e \"Mariners Apartment Complex\"."],
  [2021,'⛪',"Chemtrails over the Country Club",'#cfe3cf',"Tem \"White Dress\"."],
  [2021,'🎹',"Blue Banisters",'#9db8d9',"Foi lançado no mesmo ano do Chemtrails."],
  [2023,'🛣️',"Ocean Blvd",'#7fa7a0',"Nome completo: Did You Know That There's a Tunnel Under Ocean Blvd. Tem \"A&W\"."],
  ['em breve','⏳',"Stove e Spyda",'#e8e0d0',"Anunciados, mas sem data oficial até a última notícia que encontrei (julho de 2026)."]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=e+' <b>'+nome+'</b> ('+ano+')<small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
