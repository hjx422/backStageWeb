/**
 * Created by hjx on 9/7/2017.
 */
const Koa = require('koa')
const Router = require('koa-router')
const Views = require('koa-views')

const app = new Koa()
const router = new Router()

app.use(Views(__dirname + '/views', {
    map: {
        jade: 'jade',        // jade文件采用jade引擎进行模板解析
        html: 'mustache'     // html文件采用mustache引擎进行模板解析
    }
}))

const indexPage = async (ctx, next) => {
    await ctx.render('app.html', {
        pageTitle: '首页'
    })
}

const consolePage = async (ctx, next) => {
    await ctx.render('app.html', {
        pageTitle: '控制台页面'
    })
}

router.get('/', indexPage)
router.get('/console', consolePage)

app.use(router.routes())

app.listen(3000)
console.log('Koa started on port 3000')
