/* global use, db */
/**
 * The commands must be pasted in a mongosh terminal.
 * If they are run as a playground, only the last result will be shown.
 */
/**
 * Open a database. If it does not exist, 
 * create a new one.
 */
use('doencasdb');
/**
 * Delete the collection, so we start with an empty one.
 */
db['doenca-items'].drop();
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 1,
    nome: 'Dengue',
    descricao: 'A Dengue é uma doença febril aguda causada por um vírus. A transmissão é feita pelo mosquito Aedes aegypti, que se desenvolve em áreas tropicais e subtropicais. Existem quatro tipos de dengue: DEN-1, DEN-2, DEN-3 e DEN-4. Ao contrair um deles, o indivíduo desenvolve imunidade para o sorotipo e parcial ou temporária contra os outros tipos',
    sintomas: ['Febre alta com início súbito (39° a 40°C)', 'Forte dor de cabeça', 'Dor atrás dos olhos', 'Perda do paladar e apetite', 'Manchas e erupções na pele semelhantes ao sarampo, principalmente no tórax e membros superiores', 'Náuseas e vômitos', 'Tontura', 'Extremo cansaço', 'Moleza e dor no corpo', 'Muitas dores nos ossos e articulações', 'Dor abdominal (principalmente em crianças). (Dengue hemorrágica)', 'Dores abdominais fortes e contínuas (Dengue hemorrágica)', 'Vômitos persistentes (Dengue hemorrágica)', 'Pele pálida, fria e úmida. (Dengue hemorrágica)', 'Sangramento pelo nariz, boca e gengivas. (Dengue hemorrágica)', 'Manchas vermelhas na pele (Dengue hemorrágica)', 'Comportamento variando de sonolência à agitação (Dengue hemorrágica)', 'Confusão mental (Dengue hemorrágica)', 'Sede excessiva e boca seca​ (Dengue hemorrágica)', 'Dificuldade respiratória (Dengue hemorrágica)', 'Queda da pressão arterial. (Dengue hemorrágica)'],
    tratamentos: 'Não existe tratamento específico contra o vírus da dengue. É possível apenas tratar os sintomas da doença - tratamento sintomático. É importante tomar muito líquido para evitar a desidratação.​',
    transmissao: 'A transmissão ocorre pela picada do mosquito Aedes aegypti. Somente mosquitos contaminados transmitem a doença.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['verao', 'primavera']
    }, {
        regiao: 'sudeste',
        estacoes: ['verao', 'primavera']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['verao', 'primavera']
    }, {
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 2,
    nome: 'Zika Vírus',
    descricao: 'O Zika Vírus é uma infecção causada pelo vírus Zika, transmitido pelo mosquito Aedes aegypti, o mesmo transmissor da dengue e da febre chikungunya.',
    sintomas: ['Febre baixa (entre 37,8 e 38,5 graus)', 'Dor muscular (mialgia)', 'Dor de cabeça e atrás dos olhos', 'Rash Cutâneo (manchas vermelhas), acompanhadas de coceira.', 'Dor abdominal', 'Diarreia', 'Constipação', 'Fotofobia', 'Pequenas úlceras na mucosa oral.'],
    tratamentos: 'Não existe um tratamento específico. Ele é feito com o uso de paracetamol ou dipirona para o controle da febre e o manejo da dor.',
    transmissao: 'A transmissão ocorre pela picada do mosquito. No entanto, há ocorrências de transmissões sexuais, gestacionais e a possibilidade de transmissão transfusional.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['verao']
    }, {
        regiao: 'sudeste',
        estacoes: ['verao', 'primavera']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['verao']
    }, {
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 3,
    nome: 'Chikungunya',
    descricao: 'É uma doença infecciosa febril, causada pelo vírus Chikungunya (CHIKV), transmitido pelo mosquito Aedes aegypti. A doença pode causar inflamação nas juntas e deve ser tratada como uma artrite reumatoide (doença autoimune crônica).',
    sintomas: ['Febre', 'Dor nas articulações (intensa)', 'Dor nas costas', 'Dor de cabeça'],
    tratamentos: 'Não existe tratamento específico. É possível apenas tratar os sintomas da doença - tratamento sintomático. É importante tomar muito líquido para evitar a desidratação.​',
    transmissao: 'A transmissão ocorre pela picada do mosquito Aedes aegypti e menos comum pelo Aedes albopictus.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['verao']
    }, {
        regiao: 'sudeste',
        estacoes: ['verao', 'primavera']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['verao']
    }, {
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 4,
    nome: 'Leptospirose ',
    descricao: 'A leptospirose é uma doença infecciosa causada pela bactéria do gênero Leptospira. É uma zoonose, o que significa que pode ser transmitida de animais para humanos. A infecção pode ocorrer de forma leve, sem sintomas ou com sintomas semelhantes aos da gripe, mas também pode se tornar grave, levando à meningite, insuficiência renal, e em casos extremos, morte.',
    sintomas: ['Febre', 'Dor de cabeça', 'Dores musculares', 'Calafrios', 'Náuseas e vômitos', 'Icterícia (amarelamento da pele e dos olhos)', 'Em casos graves: meningite, insuficiência renal, hemorragia pulmonar.'],
    tratamentos: 'O tratamento para a leptospirose é feito com antibióticos, geralmente doxiciclina ou penicilina, e tratamento de suporte para aliviar os sintomas e tratar complicações. Em casos graves, pode ser necessário tratamento hospitalar. A prevenção inclui evitar o contato com água e solo contaminados e tomar medidas para controlar a população de roedores.​',
    transmissao: 'A leptospirose é transmitida principalmente através do contato com água ou solo contaminado pela urina de animais infectados, como roedores. A transmissão também pode ocorrer através do consumo de alimentos e água contaminados ou através do contato direto com animais infectados.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['verao', 'primavera']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 5,
    nome: 'Febre amarela',
    descricao: 'A febre amarela é uma doença viral transmitida por mosquitos infectados. É endêmica em algumas partes da África e da América do sul. A infecção pode variar de leve a grave e pode causar uma série de sintomas semelhantes aos da gripe, e em casos graves, pode levar à insuficiência de órgãos e morte.',
    sintomas: ['Febre', 'Dor de cabeça', 'Dores musculares e articulares', 'Náuseas e vômitos', 'Fadiga e fraqueza', 'Em casos graves: icterícia (amarelamento da pele e dos olhos), hemorragia, insuficiência de órgãos.'],
    tratamentos: 'Não há tratamento antiviral específico para a febre amarela. O tratamento é principalmente de suporte e pode incluir repouso, hidratação e tratamento dos sintomas, como dor e febre. A vacinação é a forma mais eficaz de prevenção contra a febre amarela.​',
    transmissao: 'A febre amarela é transmitida principalmente pela picada de mosquitos infectados, especificamente os mosquitos Aedes e Haemagogus. Não é transmitida de pessoa para pessoa.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['verao', 'primavera']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 6,
    nome: 'Asma',
    descricao: 'A asma é uma condição crônica que afeta as vias respiratórias nos pulmões. Estas vias, ou brônquios, permitem que o ar entre e saia dos pulmões. Se você tem asma, suas vias respiratórias estão inflamadas e sensíveis.',
    sintomas: ['Respiração ofegante', 'Tosse persistente, principalmente à noite ou no início da manhã', 'Falta de ar', 'Dor ou aperto no peito.'],
    tratamentos: 'O tratamento para a asma geralmente envolve evitar gatilhos, tomar medicamentos para prevenir sintomas (como inaladores de corticosteroides) e usar medicamentos de alívio rápido (como inaladores de broncodilatadores) para tratar os sintomas quando eles ocorrem.​',
    transmissao: 'A asma não é uma doença contagiosa e, portanto, não pode ser transmitida de pessoa para pessoa. No entanto, é desencadeada por vários fatores como alérgenos, exercícios, infecções virais, poluição, etc.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['outono']
    }, {
        regiao: 'nordeste',
        estacoes: ['inverno', 'primavera']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['inverno']
    }, {
        regiao: 'sudeste',
        estacoes: ['primavera', 'outono', 'inverno']
    }, {
        regiao: 'sul',
        estacoes: ['primavera', 'outono', 'inverno']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 7,
    nome: 'Rinite (Alérgica e Não Alérgica)',
    descricao: 'A rinite é uma inflamação da membrana mucosa do nariz, geralmente causada por uma infecção viral ou uma reação alérgica. Existem dois tipos principais: rinite alérgica, que é uma reação a alérgenos como pólen, ácaros ou pelo de animais; e rinite não-alérgica, que pode ser causada por infecções virais, exposição a irritantes como fumaça de cigarro ou mudanças de temperatura.',
    sintomas: ['Coriza (nariz escorrendo)', 'Espirros', 'Prurido (coceira) no nariz, olhos ou garganta', 'Congestão nasal', 'Em casos de rinite alérgica: olhos lacrimejantes e vermelhos.'],
    tratamentos: 'O tratamento para a rinite depende da causa. Para a rinite alérgica, o tratamento geralmente envolve evitar os alérgenos sempre que possível e o uso de medicamentos como anti-histamínicos e corticosteroides nasais para controlar os sintomas. Para a rinite não-alérgica, o tratamento pode incluir medicamentos para aliviar os sintomas, como descongestionantes e lavagem nasal com solução salina.​',
    transmissao: 'A rinite alérgica não é contagiosa e é causada por uma reação alérgica. A rinite não-alérgica pode ser causada por infecções virais, que podem ser contagiosas, ou por irritantes, que não são contagiosos.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['outono']
    }, {
        regiao: 'nordeste',
        estacoes: ['inverno', 'primavera']
    }, {
        regiao: 'sudeste',
        estacoes: ['primavera', 'outono', 'inverno']
    }, {
        regiao: 'sul',
        estacoes: ['primavera', 'outono']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 8,
    nome: 'Sinusite',
    descricao: 'A sinusite é uma inflamação dos seios paranasais, que são cavidades cheias de ar localizadas nos ossos do crânio e da face. Pode ser causada por infecção viral, bacteriana ou fúngica, ou pode ser uma complicação de uma alergia ou de um resfriado comum. A sinusite pode ser aguda, durando até 4 semanas, subaguda, durando de 4 a 12 semanas, ou crônica, durando mais de 12 semanas.',
    sintomas: ['Dor ou pressão no rosto', 'Congestão nasal ou corrimento nasal', 'Perda do olfato', 'Tosse ou dor de garganta', 'Febre', 'Fadiga', 'Dor de cabeça'],
    tratamentos: 'O tratamento para a sinusite depende da causa. Para a sinusite viral, o tratamento geralmente envolve o alívio dos sintomas, como dor, congestão e febre. Para a sinusite bacteriana, pode ser necessário tratamento com antibióticos. Para a sinusite fúngica, o tratamento pode incluir antifúngicos e cirurgia para remover o tecido infectado. Em todos os casos, medidas para aliviar a congestão, como lavagem nasal com solução salina e uso de descongestionantes, podem ser úteis.',
    transmissao: 'A sinusite em si não é contagiosa, mas a infecção viral ou bacteriana que a causou pode ser. As infecções fúngicas e as alergias que podem levar à sinusite não são contagiosas.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['outono']
    }, {
        regiao: 'nordeste',
        estacoes: ['inverno', 'outono']
    }, {
        regiao: 'sul',
        estacoes: ['outono', 'primavera']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 9,
    nome: 'Pneumonia',
    descricao: 'A pneumonia é uma infecção dos pulmões que pode ser causada por bactérias, vírus ou fungos. Ela faz com que os sacos de ar nos pulmões se encham de pus e outros líquidos, o que torna difícil para o oxigênio alcançar a corrente sanguínea. A pneumonia pode variar de leve a grave e pode afetar pessoas de todas as idades.',
    sintomas: ['Tosse, que pode produzir muco', 'Febre, suores e calafrios', 'Falta de ar', 'Dor no peito ao respirar ou tossir', 'Fadiga', 'Confusão ou mudanças no estado mental (mais comum em adultos mais velhos).'],
    tratamentos: 'O tratamento para a pneumonia depende da causa. A pneumonia bacteriana é geralmente tratada com antibióticos. A pneumonia viral pode ser tratada com antivirais, embora muitos casos se resolvam por conta própria com o tempo. A pneumonia fúngica é tratada com antifúngicos. Em todos os casos, o tratamento de suporte, como oxigênio e medicamentos para aliviar a febre e a dor, pode ser necessário. Em casos graves, a hospitalização pode ser necessária.',
    transmissao: 'A pneumonia pode ser contagiosa, dependendo da causa. A pneumonia bacteriana e viral são contagiosas e podem ser transmitidas de pessoa para pessoa através de gotículas respiratórias, como quando uma pessoa infectada tem tosse ou espirra. A pneumonia fúngica geralmente não é contagiosa.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['outono', 'inverno']
    }, {
        regiao: 'nordeste',
        estacoes: ['inverno']
    }, {
        regiao: 'sul',
        estacoes: ['inverno']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 10,
    nome: 'Gripe',
    descricao: 'A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão. Existem quatro tipos de vírus influenza/gripe: A, B, C e D. O vírus influenza A e B são responsáveis por epidemias sazonais, sendo o vírus influenza A responsável pelas grandes pandemias.',
    sintomas: ['febre', 'calafrios', 'dores musculares', 'tosse', 'congestão', 'coriza', 'dores de cabeça', 'fadiga.'],
    tratamentos: 'A gripe é tratada principalmente com repouso e ingestão de líquidos para permitir que o corpo combata a infecção por conta própria. Analgésicos anti-inflamatórios vendidos sem prescrição médica podem ajudar com os sintomas. Uma vacina anual pode ajudar a prevenir a gripe e limitar suas complicações.',
    transmissao: 'A gripe (influenza) se espalha através de gotículas respiratórias quando pessoas infectadas tossem, espirram ou falam, sendo inaladas por indivíduos próximos. Contaminação também ocorre pelo toque de superfícies contaminadas e contato com o rosto. Ambientes fechados favorecem a transmissão. Medidas como lavar as mãos, cobrir boca e nariz, e evitar contato próximo ajudam a prevenir sua propagação.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['inverno']
    }, {
        regiao: 'nordeste',
        estacoes: ['inverno', 'outono']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['inverno', 'outono']
    }, {
        regiao: 'sudeste',
        estacoes: ['inverno', 'outono']
    }, {
        regiao: 'sul',
        estacoes: ['inverno', 'outono', 'inverno']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 11,
    nome: 'Resfriado',
    descricao: 'Ao contrário da gripe, um resfriado comum pode ser provocado por muitos tipos diferentes de vírus. A condição costuma ser inofensiva e os sintomas geralmente desaparecem em duas semanas. Os sintomas incluem secreção nasal, espirros e congestão. Febre alta ou sintomas graves são razões para consultar um médico, especialmente em crianças.',
    sintomas: ['Dor abdominal', 'Cólicas abdominais', 'Diarreia', 'Febre baixa', 'Náuseas e vômitos', 'Cansaço e fraqueza', 'Desidratação.'],
    tratamentos: 'O tratamento é feito por meio do uso de anti-inflamatórios e descongestionantes. A maioria das pessoas se recupera por conta própria em duas semanas. Medicamentos vendidos sem prescrição médica e remédios caseiros ajudam a controlar os sintomas.',
    transmissao: 'Tanto em gripe, quanto em resfriados, a transmissão ocorre quando gotículas de saliva do indivíduo infectado entram em contato com as vias aéreas de outra pessoa, por meio de espirros, tosse, fala, ou através do contato com objetos contaminados.',
    reincidencias: [{
        regiao: 'norte',
        estacoes: ['inverno']
    }, {
        regiao: 'nordeste',
        estacoes: ['outono']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['outono']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 12,
    nome: 'Gastroenterites (intoxicação alimentar)',
    descricao: 'Doença causada por alimentos contaminados com bactérias, vírus, parasitas ou toxinas.',
    sintomas: ['Dor abdominal', 'Cólicas abdominais', 'Diarreia', 'Febre baixa', 'Náuseas e vômitos', 'Cansaço e fraqueza', 'Desidratação.'],
    tratamentos: 'A maioria dos casos de intoxicação alimentar é leve e resolvida sem tratamento. Garantir uma hidratação adequada é o aspecto mais importante do tratamento.',
    transmissao: 'Transmitida por contato com uma pessoa infectada ou por alimentos ou água contaminados.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao', 'inverno']
    }, {
        regiao: 'sudeste',
        estacoes: ['verao']
    }, {
        regiao: 'sul',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 13,
    nome: 'Conjuntivite viral',
    descricao: 'Infecção da conjuntiva aguda altamente contagiosa geralmente causada por um adenovírus.',
    sintomas: ['Coceira intensa nos olhos', 'Produção excessiva de lágrimas', 'Vermelhidão no olho', 'Hipersensibilidade à luz', 'Sensação de areia nos olhos'],
    tratamentos: 'A conjuntivite viral normalmente desaparece sozinha, sem precisar de um tratamento específico, no entanto, o médico pode recomendar alguns remédios para aliviar os sintomas e facilitar o processo de recuperação. Para isso, é bastante comum que o oftalmologista recomende o uso de colírios hidratantes ou lágrimas artificiais, de 3 a 4 vezes ao dia, para aliviar a coceira, a vermelhidão e a sensação de areia nos olhos. Em casos mais raros, em que a pessoa tem muita sensibilidade à luz, e em que a conjuntivite se prolonga por muito tempo, o médico pode ainda receitar outros medicamentos, como os corticoides. Além disso, lavar os olhos várias vezes ao dia e aplicar compressas geladas sobre o olho, também ajudam a aliviar bastante os sintomas.',
    transmissao: 'A transmissão da conjuntivite viral se dá-se através do contato com a secreção do olho de uma pessoa contaminada ou da partilha de objetos, como lenços ou toalhas, que tenham entrado em contato direto com o olho afetado.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 14,
    nome: 'Intoxicação alimentar',
    descricao: 'Doença causada por alimentos contaminados com bactérias, vírus, parasitas ou toxinas.',
    sintomas: ['Dor abdominal', 'Cólicas abdominais', 'Diarreia', 'Febre baixa', 'Náuseas e vômitos', 'Cansaço e fraqueza', 'Desidratação'],
    tratamentos: 'A maioria dos casos de intoxicação alimentar é leve e resolvida sem tratamento. Garantir uma hidratação adequada é o aspecto mais importante do tratamento.',
    transmissao: 'Transmitida por contato com uma pessoa infectada ou por alimentos ou água contaminados.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
db['doenca-items'].insertOne({
    id: 15,
    nome: 'Insolação',
    descricao: 'Exposição excessiva ao Sol, faz com que uma pessoa tenha sua temperatura corporal desregulada, batendo os 40 °C de temperatura interna.',
    sintomas: ['Pele quente e seca', 'Dor de cabeça forte', 'Tontura', 'Náuseas, enjoo e vômito', 'Pulso rápido', 'Temperatura corporal elevada', 'Respiração dificultosa', 'Palidez', 'Desmaios', 'Confusão mental', 'Ausência total de suor.'],
    tratamentos: 'O tratamento da insolação pode ser feito com hidratação intravenosa e com o uso de técnicas que visam diminuir ao máximo sua temperatura corporal.',
    transmissao: 'Não é uma doença transmissível de pessoa para pessoa, é causada pela exposição ao calor excessivo.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    },
    {
        regiao: 'sul',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 16,
    nome: 'Otite (infecção de ouvido)',
    descricao: 'Uma infecção de ouvido ocorre quando uma das trompas de Eustáquio fica inchada ou bloqueada, causando o acúmulo de fluido no ouvido médio. As trompas de Eustáquio são pequenos tubos que vão de cada orelha diretamente à parte posterior da garganta.',
    sintomas: ['Dor leve ou desconforto dentro do ouvido', 'Uma sensação de pressão dentro da orelha que persiste', 'Agitação em bebês', 'Drenagem de ouvido semelhante a pus', 'Perda de audição'],
    transmissao: 'Embora na maioria dos casos seja causada por microrganismos, a otite, em si, não é transmissível. Entretanto, os causadores da infecção podem ser transmitidos através de secreções, contato com superfícies contaminadas, compartilhamento de objetos de uso pessoal, entre outros.',
    tratamentos: 'A maioria das infecções leves de ouvido desaparece sem intervenção. Antibióticos podem ser prescritos se a infecção de ouvido for crônica ou não parecer estar melhorando. A cirurgia pode ser uma opção se a infecção de ouvido não for eliminada com os tratamentos médicos usuais ou se tiver muitas infecções de ouvido em um curto período. Na maioria das vezes, os tubos são colocados nos ouvidos para permitir que o fluido seja drenado.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }, {
        regiao: 'sul',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 17,
    nome: 'Impetigo',
    descricao: 'Infecção de pele altamente contagiosa que provoca feridas vermelhas no rosto. O impetigo afeta principalmente bebês e crianças.',
    sintomas: ['Aparecimento de bolhas com pus, em pontos do corpo como nariz, boca, braços e pernas', 'Podem surgir feridas avermelhadas semelhantes a crostas.'],
    transmissao: 'O impetigo é uma doença altamente contagiosa, e pode ser transmitida através do contato com toalhas, roupas, mãos e unhas contaminadas. As mãos são o meio mais importante de transmitir a infecção.',
    tratamentos: 'O tratamento do impetigo localizado é com o antibiótico mupirocina em pomada 3 vezes ao dia, durante 7 dias ou pomada de retapamulina 2 vezes ao dia, durante 5 dias ou creme de ozenoxacina a 1% aplicado a cada 12 horas por 5 dias.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 18,
    nome: 'Micose de pele',
    descricao: 'Infecção fúngica altamente contagiosa da pele ou do couro cabeludo.',
    sintomas: ['Pele escamada e irritada', 'Pele muito vermelha e com alto grau de escamação na borda da erupção (inflamação)', 'Pele ressaltada e com bolhas (esse é um sintoma de uma infecção de dermatofitose mais grave)', 'Múltiplos anéis (esse é um sinal de uma infecção grave)'],
    transmissao: 'A micose é transmitida pelo contato direto ou ao tocar um animal ou objeto infectado.',
    tratamentos: 'O tratamento é feito por meio de cuidados individuais e do uso de antifúngicos.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 19,
    nome: 'Desidratação',
    descricao: 'Perda de água do organismo causada por uma doença, sudorese ou ingestão inadequada.',
    sintomas: ['Mal-estar', 'Fraqueza', 'Sonolência', 'Irritabilidade', 'Dificuldade de atenção', 'Sensação de fome, quando na verdade é sede', 'Dor de cabeça, principalmente pela manhã', 'Tontura ao levantar-se da posição sentada ou deitada (hipotensão postural).'],
    transmissao: 'Não há transmissão, é adquirido pela falta de líquidos no corpo',
    tratamentos: 'Beber água, soro caseiro ou bebidas isotônicas para repor os fluidos perdidos pode ajudar a prevenir a desidratação. Encontrar um lugar para se refrescar também pode ajudar. Nos casos mais graves, a reidratação deve ser feita por meio de soro que pode ser adquirido em farmácias e postos de saúde, como também a utilização do soro caseiro.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 20,
    nome: 'Conjuntivite alérgica',
    descricao: 'A conjuntivite alérgica é uma inflamação na mucosa do olho (conjuntiva) devido a alergia. Embora haja diversos alérgenos, o pólen é uma causa sazonal comum.',
    sintomas: ['Coceira nos olhos', 'Olhos marejados', 'Vermelhidão ou olhos inchados', 'Sensibilidade à luz ou visão embaçada'],
    transmissao: 'Ao contrário dos outros tipos de conjuntivite, a alérgica não é contagiosa. Dessa forma, os sintomas só aparecem se o paciente alérgico entra em contato com substância alergênicas como pelo de animais, pólen e ácaros.',
    tratamentos: 'O tratamento inclui evitar os alérgenos e usar medicamentos anti-histamínicos, seja por via oral ou diretamente nos olhos.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['primavera']
    }, {
        regiao: 'sudeste',
        estacoes: ['outono', 'inverno']
    }, {
        regiao: 'sul',
        estacoes: ['primavera', 'verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 21,
    nome: 'Dermatite atópica (eczema)',
    descricao: 'A dermatite atópica geralmente se desenvolve na infância e é mais comum em pessoas que têm histórico familiar da doença. O principal sintoma é uma irritação na pele que, normalmente, aparece nos braços e atrás dos joelhos, mas também pode ocorrer em qualquer lugar. tratamento inclui evitar sabão e outros agentes irritantes. Alguns cremes ou pomadas também podem aliviar a coceira.',
    sintomas: ['Na pele: erupções, descascamento, fissuras, inchaço, secura ou vermelhidão', 'Coceira ou rubor'],
    transmissao: 'A dermatite atópica, ou eczema atópico, é uma doença genética, crônica e não-contagiosa, ou seja, não existe perigo de transmissão.',
    tratamentos: 'O tratamento inclui evitar sabão e outros agentes irritantes. Alguns cremes ou pomadas também podem aliviar a coceira.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['primavera']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 22,
    nome: 'Bronquiolite',
    descricao: 'A bronquiolite é quase sempre causada por um vírus. A doença costuma ocorrer durante os meses de inverno. A condição começa como um resfriado comum. Progride para tosse, chiado e, às vezes, dificuldade em respirar. Os sintomas podem durar de uma semana a um mês.É possível tratar a bronquiolite com cuidados domiciliares na maioria dos casos. Casos graves necessitam de hospitalização.',
    sintomas: ['Falta de ar', 'Respiração rápida', 'Respiração sibilante', 'Dificuldade ao respirar', 'Respiração superficial', 'Febre', 'Mal-estar', 'Perda de apetite', 'Tosse', 'Congestão nasal'],
    transmissao: 'A transmissão normalmente se dá pelo ar (tosse ou espirro), saliva (beijos ou bebidas compartilhadas) ou contato com superfícies contaminadas, mãos e pele. Quando acontece? Dos casos de bronquiolite, 75% ocorrem no primeiro ano de vida. A doença é a principal causa de hospitalização entre crianças.',
    tratamentos: 'É possível tratar a bronquiolite com cuidados domiciliares na maioria dos casos. Casos graves necessitam de hospitalização.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['outono']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 23,
    nome: 'Varicela (catapora)',
    descricao: 'A varicela é altamente contagiosa para quem ainda não teve a doença ou não foi vacinado contra ela. O sintoma mais característico é uma irritação cutânea com bolhas na pele. É possível prevenir a varicela por meio de vacina. O tratamento geralmente envolve aliviar os sintomas, embora grupos de alto risco possam receber medicamentos antivirais.',
    sintomas: ['Fadiga', 'Febre', 'Mal-estar', 'Perda de apetite', 'Bolha', 'Manchas vermelhas', 'Sarna', 'Úlceras', 'Coceira', 'Dor de garganta', 'Pus'],
    transmissao: 'A catapora é facilmente transmitida para outras pessoas. O contágio acontece por meio do contato com o líquido da bolha ou pela tosse, espirro, saliva ou por objetos contaminados pelo vírus, ou seja, contato direto ou de secreções respiratórias.',
    tratamentos: 'É possível prevenir a varicela por meio de vacina. O tratamento geralmente envolve aliviar os sintomas, embora grupos de alto risco possam receber medicamentos antivirais.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['outono']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 24,
    nome: 'Sinusite aguda',
    descricao: 'Sinusite é a inflamação das mucosas dos seios da face, região do crânio formada por cavidades ósseas ao redor do nariz, maçãs do rosto e olhos. Costuma ocorrer dor de cabeça na área do seio da face mais comprometido (seio frontal, maxilar, etmoidal e esfenoidal). A dor pode ser forte, em pontada, pulsátil ou sensação de pressão ou peso na cabeça.',
    sintomas: ['Dor pode ser forte, em pontada, pulsátil ou sensação de pressão ou peso na cabeça.', 'Na grande maioria dos casos, surge obstrução nasal com presença de secreção amarela ou esverdeada, sanguinolenta, que dificulta a respiração.', 'Febre', 'Cansaço', 'Coriza', 'Tosse', 'Dores musculares', 'Perda de apetite'],
    transmissao: 'Pode ser transmitida através de gotículas respiratórias expelidas ao tossir, espirrar ou falar.',
    tratamentos: 'O tratamento para a sinusite aguda, geralmente, é feito com remédios para aliviar os principais sintomas causados pela inflamação, prescritos pelo otorrinolaringologista.',
    reincidencias: [{
        regiao: 'nordeste',
        estacoes: ['outono']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 25,
    nome: 'Alergias sazonais',
    descricao: 'As alergias sazonais são produzidas pela exposição a substâncias suspensas no ar (como o pólen) que aparecem apenas durante determinadas épocas do ano.',
    sintomas: ['rinite alérgica', 'conjuntivite alérgica', 'coceira no nariz', 'coceira céu da boca', 'coceira nos olhos', 'O nariz escorre, produzindo uma secreção aquosa transparente, e pode ficar obstruído.', 'dores de cabeça', 'espirros', 'Os olhos se umedecem e coçam, por vezes profusamente. A parte branca dos olhos pode ficar avermelhada e as pálpebras podem inchar e apresentar vermelhidão.', 'Tosse', 'Irritabilidade', 'dificuldade para dormir'],
    transmissao: 'A alergia sazonal também é provocada por esporos de fungos, que podem ser transportados pelo ar durante períodos de tempo bastante prolongados.',
    tratamentos: 'Sprays nasais com corticosteroides, anti-histamínicos, descongestionantes, colírio, imunoterapia com alérgenos. Pessoas com alergias sazonais graves que permanecem problemáticas depois de tentarem os tratamentos padrão podem considerar mudar-se para uma região que não tenha o alérgeno.',
    reincidencias: [{
        regiao: 'centro-oeste',
        estacoes: ['primavera']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 26,
    nome: 'Infecção urinária',
    descricao: 'Infecção em alguma parte do sistema urinário, nos rins, na bexiga ou na uretra. As infecções do trato urinário são mais comuns em mulheres. Geralmente, ocorrem na bexiga ou na uretra, mas as infecções mais graves envolvem o rim.',
    sintomas: ['dor pélvica', 'aumento da vontade de urinar', 'dor ao urinar e sangramento na urina', 'A infecção nos rins pode causar dor nas costas, náuseas, vômitos e febre.'],
    transmissao: 'A infecção urinária e a bactéria que provoca a infecção no trato urinário não são contagiosas.',
    tratamentos: 'O tratamento é feito por meio do uso de antibióticos.',
    reincidencias: [{
        regiao: 'sudeste',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 27,
    nome: 'Dermatite de contato',
    descricao: 'A dermatite de contato é uma reação inflamatória da pele que ocorre quando a pele entra em contato com uma substância irritante ou alérgica. Pode ser causada por produtos químicos, metais, plantas, cosméticos, medicamentos e outros materiais que desencadeiam uma resposta do sistema imunológico na pele. Existem dois tipos principais de dermatite de contato: irritante e alérgica. A dermatite irritante ocorre quando uma substância danifica diretamente a pele, enquanto a dermatite alérgica ocorre como resultado de uma reação alérgica a uma substância.',
    sintomas: ['Coceira intensa.', 'Vermelhidão.', 'Inchaço.', 'Bolhas.', 'Descamação da pele.', 'Sensação de queimação ou dor.', 'Em casos graves: úlceras e feridas abertas.'],
    transmissao: 'A dermatite de contato não é uma doença contagiosa e não é transmitida de pessoa para pessoa. Ela ocorre quando a pele entra em contato com substâncias que desencadeiam uma reação inflamatória na pele. Isso pode ocorrer ao tocar diretamente a substância irritante ou alérgica, ou através do contato indireto, como no caso de aplicação de cosméticos ou contato com metais presentes em objetos.',
    tratamentos: 'O tratamento da dermatite de contato concentra-se em aliviar os sintomas, promover a cicatrização da pele e prevenir recorrências. Identificar e evitar a substância desencadeante é fundamental. Manter a área afetada limpa com lavagens suaves é importante. Além disso, compressas frias e pomadas de corticosteroide podem ajudar a reduzir a inflamação e o desconforto. Em casos mais graves, um médico pode prescrever medicamentos mais fortes.',
    reincidencias: [{
        regiao: 'sul',
        estacoes: ['verao']
    }]
});
// Inserção de dados na coleção "doenca-items"
db['doenca-items'].insertOne({
    id: 28,
    nome: 'Bronquite',
    descricao: 'A bronquite crônica, juntamente com o enfisema pulmonar e a asma brônquica, faz parte de um grupo de enfermidades conhecido como doenças pulmonares obstrutivas crônicas (DPOC). O ponto comum entre elas é a obstrução crônica dos brônquios, com limitação ao livre fluxo de ar pelo pulmão. Inflamação da mucosa dos tubos brônquicos, que transportam o ar para dentro e para fora dos pulmões.',
    sintomas: ['tosse por períodos prolongados, que pode ser seca ou com catarro;', 'chiado no peito;', 'falta de ar ou dificuldade respiratória;', 'respiração curta e acelerada;', 'sensação de peso ou opressão no peito.'],
    transmissao: 'O contágio ocorre por meio das gotículas de saliva liberadas no ar durante os espirros e na tosse. Quando essas gotículas emitidas por um doente infetado entram em contacto com os olhos, boca ou nariz de outra pessoa, esta pode contrair a doença.',
    tratamentos: 'O tratamento da bronquite pode ser feito por meio do uso de medicamentos como antibióticos (no caso de uma infecção bacteriana) e broncodilatadores (no caso de infecção por vírus). Podem ser recomendadas ao paciente a realização de inalação com soro fisiológico e a constante hidratação das narinas.',
    reincidencias: [{
        regiao: 'sul',
        estacoes: ['inverno']
    }, {
        regiao: 'centro-oeste',
        estacoes: ['inverno']
    }]
});