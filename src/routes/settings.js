import router, {query} from 'express'

const app = router()


app.get('/', (req, res) => {
    res.render('native/cadastros/index', {
        page_subTitle:'Cadastros',
        page_seo: false,
        page_description:'Gerencie cadastros da aplicação'
    })
})


app.get('/clientes', (req, res) => {
    let query = {
        'page':req.query.page ?? 1,
        'pageMax': Math.min(req.query.show ?? 10, 100)
    }

    if (req.query.filter){
        let primeiroCaractere = req.query.filter.substring(0,1)
        if (Number.isNaN(parseInt(primeiroCaractere))) {
            query.nome = req.query.filter
        } else {
            query.udoc = req.query.filter
        }
    }

    API.request('readPersonClient','GET', query).then((response)=> {
        if (!response) {
            // TODO: Melhorar sistema de erro
            return res.redirect('/')
        }
        
        res.render(
            'native/cadastros/clients/index',
            {
                page_subTitle:'Cadastros de clientes',
                page_seo: false,
                rows:response.data,
            }
        )
    })
})




export default app