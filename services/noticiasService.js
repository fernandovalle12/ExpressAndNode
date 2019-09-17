
var getNoticias = function() {
  var noticia = [
    {
      id: 1,
      title: 'Daniel Alves "invade" gravação de repórter: "Vim fazer as pazes"',
      image: 'https://s2.glbimg.com/Al5rb9f2v3vsYN2nXH2rEAo4USA=/206x116/top/smart/filters:strip_icc()/s2.glbimg.com/q9JHxy9oWUXoX9RIOxs1K8vPobE=/0x0:633x355/267x150/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/E/y/f3XFOrT4eERwwYFzrD5w/danielalvesfelipediniz.jpg',
      description: 'Lateral surpreende jornalista do Grupo Globo e faz brincadeira no CT da Barra Funda',
      link: 'https://globoesporte.globo.com/futebol/times/sao-paulo/noticia/daniel-alves-invade-gravacao-de-reporter-no-sao-paulo-e-brinca-vim-fazer-as-pazes-veja-o-video.ghtml'
    },
    {
      id: 2,
      title: 'Ter Stegen fecha o gol e evita derrota do Barça para Dortmund',
      image: 'https://s2.glbimg.com/kv-I72aXBOP8hbGX1QoG25PGnSQ=/0x0:2000x1243/640x360/smart/filters:quality(70)/s.glbimg.com/es/ge/f/original/2019/09/17/2019-09-17t193052z_1324045774_rc1407adc890_rtrmadp_3_soccer-champions-dor-fcb-report_YLELcFW.jpg',
      description: 'Goleiro alemão pega pênalti de Reus e faz outras três defesaças em Dortmund em dia de estreante mais novo pelo Barça. Grupo fica totalmente aberto com empate da Inter de Milão em casa',
      link: 'https://globoesporte.globo.com/futebol/futebol-internacional/liga-dos-campeoes/jogo/17-09-2019/Borussiadortmund-barcelona.ghtml'
    },
    {
      id: 3,
      title: 'Ibama apreende madeira e multa em R$ 4,7 mi',
      image: 'https://s2.glbimg.com/q34HDFQSwQkfW6OIPKY4eRp4J7E=/0x0:1280x1280/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/I/v/soTruIRayUpAMSRMmWyA/whatsapp-image-2019-09-16-at-20.59.17.jpeg',
      description: 'Fiscais suspeitam que madeira foi retirada da Terra Indígena Areões onde 219 mil hectares foram destruídos por queimadas. Ninguém foi preso.',
      link: 'https://g1.globo.com/mt/mato-grosso/noticia/2019/09/17/ibama-flagra-madeira-ilegal-e-aplica-r-47-milhoes-em-multas-em-20-fazendas-em-mt.ghtml'
    },
    {
      id: 4,
      title: 'Após 3 anos, Léo Pinheiro deixa a prisão no PR',
      image: 'https://s2.glbimg.com/iYAxifmuOOI4ftJMfavHZld32iU=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2018/01/24/66665342_pa_rio_de_janeiro_rj_20-04-2017_lava_jato_-_depoimento_de_leo_pinheiro_ex-presidente_da_oas.jpg',
      description: 'Depois de três anos preso em Curitiba, o ex-presidente da OAS Léo Pinheiro foi solto nesta terça-feira (17).',
      link: 'https://blogs.oglobo.globo.com/bela-megale/post/depois-de-3-anos-empreiteiro-leo-pinheiro-deixa-prisao-em-curitiba.html'
    },
    {
      id: 5,
      title: 'Gilmar: STF julga até novembro pedido de Lula',
      image: 'https://s2.glbimg.com/2R4OEEMJGma49VU_NDanL18eswc=/206x116/top/smart/filters:strip_icc()/s2.glbimg.com/n9UAOWPG1-8QAoSY5mVmuPgBL7k=/0x0:755x424/267x150/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/V/n/bWqa7wTZuRAfzKyOuptg/foto01esp-101-lula-a14.jpg',
      description: 'Defesa do ex-presidente diz que ex-juiz Sergio Moro era suspeito e pede anulação de processos nos quais ele atuou. Caso começou a ser julgado e tem dois votos contra Lula; faltam outros três.',
      link: 'https://g1.globo.com/politica/noticia/2019/09/17/gilmar-mendes-diz-que-stf-julga-ate-novembro-pedido-de-lula-para-anular-condenacao.ghtml'
    }
  ];

  return noticia;
}

module.exports = {
  getNoticias: getNoticias
}