import Container from './container'
import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          { (
            <>
              View source code for this blog{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href={`https://github.com/KessokuDAO/portofolio`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
