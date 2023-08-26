import e from 'express'
import path from 'path'
import { engine } from 'express-handlebars'
// import fs from 'fs'
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

// app.get('/doencas', (req, res) => {
//   const doencaSelecionada = req.query.doenca
//   console.log(doencaSelecionada + 'teste inicio')

//   if (!doencaSelecionada) {
//     // Se não houver parâmetro "doenca", renderize a visualização sem dados
//     console.log('teste fim')
//     return res.render('doencas', {
//       nome: '',
//       geral: '',
//       sintomas: [],
//       tratamento: ''
//     });
//   }

//   const filePath = path.join(__dirname, '..', 'doencas', `${doencaSelecionada}.json`);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.render('doencas', {
//         nome: '',
//         geral: '',
//         sintomas: [],
//         tratamento: ''
//       });
//     }

//     console.log(data + 'teste')
//     const doencaData = JSON.parse(data)

//     res.render('doencas', {
//       nome: doencaData.nome,
//       geral: doencaData.geral,
//       sintomas: doencaData.sintomas,
//       tratamento: doencaData.tratamentos
//     });
//   });
// });

app.get('/doencas', async (req, res) => {
  const doencaSelecionada = parseInt(req.query.id as string);
  console.log(doencaSelecionada);

  try {
    const doenca = await service.get(doencaSelecionada); // Adicione este método no seu serviço
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

// app.get('/regiao', (req, res) => {
//   const doencasFolder = path.join(__dirname, '..', 'doencas');

//   fs.readdir(doencasFolder, (err, files) => {
//     if (err) {
//       console.error(err);
//       return res.render('regiao', { doencas: [] });
//     }

//     const jsonFiles = files.filter(file => file.endsWith('.json'))
//     const doencas = jsonFiles.map(file => path.parse(file).name)

//     res.render('regiao', { doencas })
//   });
// });
app.get('/regiao', async (req, res) => {
  try {
    const regiao = req.query.regiao as string;
    const estacao = req.query.estacao as string;
    console.log(regiao);
    console.log(estacao);
    const doencas = await service.listByregionAndSeason(regiao, estacao); // Listagem Full
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

// Rotas da API de Dados

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

/**
 * Item list route
 */
app.get('/listFiltered/:regiao/:estacao', async (req, res) => {

  try{

    const doencas = await service.listByregionAndSeason(req.params.regiao, req.params.estacao)
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

// /**
//  * Item insertion route
//  */
// app.put('/add', e.json(), async (req, res) => {
//   try {
//       await service.add(req.body)
//       res.status(200).json({
//           status: 'ok',
//       })
//   } catch (error) {
//       if (error instanceof ValidationError) {
//           res.status(406).json({
//               status: 'failure',
//               message: 'Invalid data received. Please check documentation.',
//               debug: 'Received: ' + JSON.stringify(req.body),
//           })
//       } else {
//           res.status(500).json({
//               status: 'failute',
//               message: 'Internal server error',
//               debug: (error as Error).message,
//           })
//       }
//   }
// })

// Iniciar o servidor
app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3000')
});