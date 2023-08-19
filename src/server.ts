import e from 'express'
import path from 'path'
import { engine } from 'express-handlebars'
import fs from 'fs'

const app = e()

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

app.get('/doencas', (req, res) => {
  const doencaSelecionada = req.query.doenca
  console.log(doencaSelecionada + 'teste inicio')

  if (!doencaSelecionada) {
    // Se não houver parâmetro "doenca", renderize a visualização sem dados
    console.log('teste fim')
    return res.render('doencas', {
      nome: '',
      geral: '',
      sintomas: [],
      tratamento: ''
    });
  }

  const filePath = path.join(__dirname, '..', 'doencas', `${doencaSelecionada}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.render('doencas', {
        nome: '',
        geral: '',
        sintomas: [],
        tratamento: ''
      });
    }

    console.log(data + 'teste')
    const doencaData = JSON.parse(data)

    res.render('doencas', {
      nome: doencaData.nome,
      geral: doencaData.geral,
      sintomas: doencaData.sintomas,
      tratamento: doencaData.tratamentos
    });
  });
});

app.get('/mapa', (req, res) => {
  res.render('mapa', {
    activePage: 'mapa',
  });
});

app.get('/regiao', (req, res) => {
  const doencasFolder = path.join(__dirname, '..', 'doencas');

  fs.readdir(doencasFolder, (err, files) => {
    if (err) {
      console.error(err);
      return res.render('regiao', { doencas: [] });
    }

    const jsonFiles = files.filter(file => file.endsWith('.json'))
    const doencas = jsonFiles.map(file => path.parse(file).name)

    res.render('regiao', { doencas })
  });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { activePage: 'sobre' })
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
});