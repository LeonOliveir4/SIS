import e from 'express'
import path from 'path'
import { engine } from 'express-handlebars'
import {DoencaItemService} from './service'
import {Database} from './database'
import {ValidationError} from './model'


/**
 * Database and service should be instantiate only once for
 * the whole application
 */
const database = new Database()
const service = new DoencaItemService(database)


const app = e()

/**
 * router for all api calls
 */
// eslint-disable-next-line new-cap
const api = e.Router()

app.use(e.static(__dirname + '/public'))

// Configuração do Handlebars como mecanismo de renderização
//Usando engine para settar layout
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, '..', 'views'))


app.use('/static', e.static(
  path.join(__dirname, '..', 'static')))

app.use('/img', e.static(
  path.join(__dirname, '..', 'img')))

app.use('/dist', e.static(
  path.join(__dirname, '..', 'dist')))

// Rotas
app.get('/', (req, res) => {
  res.render('home', { activePage: 'home' })
});

app.get('/doencas', async (req, res) => {
  const doencaSelecionada = parseInt(req.query.id as string);

  try {
    const doenca = await service.get(doencaSelecionada); 
    console.log(doenca);
    if (!doenca) {
      return res.render('doencas', {
        nome: '',
        geral: '',
        sintomas: [],
        transmissao: '',
        tratamento: ''
      });
    }
  res.render('doencas', { 
    nome: doenca.nome,
    descricao: doenca.descricao,
    sintomas: doenca.sintomas,
    transmissao: doenca.transmissao,
    tratamentos: doenca.tratamentos
  });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Erro ao carregar informações da doença' });
  }
});


app.get('/mapa', (req, res) => {
  res.render('mapa', {
    activePage: 'mapa',
  });
});

/**
 * Get list deseases route
 */
app.get('/regiao', async (req, res) => {
  try {
    const regiao = req.query.regiao as string;
    const estacao = req.query.estacao as string;
    console.log(regiao);
    console.log(estacao);
    const doencas = await service.listByregionAndSeason(regiao, estacao); // Listagem de acordo com filtros selecionados
    res.render('regiao', { doencas,
    regiao,
    estacao,
    equal: (a:any, b: any) => a ===b // Função de comparação como helper
    });
  } catch (error) {
    console.error(error);
    res.render('regiao', { doencas: [] });
  }
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { activePage: 'sobre' })
});

/**
 * Item list route
 */
app.get('/list', async (req, res) => {

  try{

    const doencas = await service.list()
    console.log(doencas);
    res.status(200).json({
      status: 'ok',
      doencas: doencas 
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'failure',
      doencas:  'Internal error. Database query failed.', 
    })
  }

})

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
});