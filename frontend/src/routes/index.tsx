import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateFailure from '../pages/CreateFailure/index'
import GetAllFailures from '../pages/GetAllFailures'

const Routes: React.FC = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/createfailure',
      element: <CreateFailure />,
    },
    {
      path: '/getfailures',
      element: <GetAllFailures />,
    },
    {
      path: '*',
      element: <Home />,
    },
  ])
  return routes
}

export default Routes
