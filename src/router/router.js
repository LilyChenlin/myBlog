
import App from '../App'
const sidebar = r => require.ensure([], () => r(require('../components/sidebar')),'sidebar')
const article = r => require.ensure([], () => r(require('../components/article')),'article')
const about = r => require.ensure([], () => r(require('../components/about')),'about')
const signIn = r => require.ensure([], () => r(require('../components/admin/signIn')),'signIn')

export default [
  {
    path: '/', 
    components: {
      default:article,
      sidebar:sidebar
    }
  },
  {
    path:'/article',
    components:{
      default:article,
      sidebar:sidebar
    }
  },
  {
    path:'/about',
    components:{
      default:about,
      sidebar:sidebar
    }
  },
  {
    path:'/signIn',
    components:{
      default:signIn
    }
  }
]
