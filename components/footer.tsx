import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="text-4xl lg:text-[1rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <a href="https://discordapp.com/users/873803230042263563" target="_blank" rel="nofollow">
                      <img src="https://lanyard.cnrad.dev/api/873803230042263563?idleMessage=:Building%20something..."  alt="Discord Presence">                        
                      </img>
          </a>
          </div>
          <div className="text-4xl lg:text-[1rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <a href="https://discordapp.com/users/873803230042263563" target="_blank" rel="nofollow">
                      <img src="https://lanyard.cnrad.dev/api/462592550402916352?idleMessage=:Building%20something..."  alt="Discord Presence">                        
                      </img>
          </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/KessokuDAO"
              target="_blank"
              rel="noreferrer"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
             View on GitHub
            </a>
            <a
              href="https://x.com/KessokuDAO"
              target="_blank"
              rel="noreferrer"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
             View on X
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
