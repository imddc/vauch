import { Link, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import DefaultLayout from '../layout/default'

export const Route = createRootRoute({
  meta: () => [
    {
      title: 'Home',
    },
  ],
  component: Root,
})

function Root() {
  return (
    <>
      <div className="box-border flex gap-2 border-b border-gray-200 p-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="[&.active]:font-bold" to="/about">
          About
        </Link>
      </div>

      <DefaultLayout />
      <TanStackRouterDevtools />
    </>
  )
}
