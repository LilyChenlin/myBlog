
import App from '../App'
const sidebar = r => require.ensure([], () => r(require('../components/sidebar')),'sidebar')
const article = r => require.ensure([], () => r(require('../components/article')),'article')
export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '', 
      components: {sidebar,article}
    },
  ]
}]
