import React from 'react'
import { Music, Plus } from 'lucide-react'
import { Button} from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const HeaderComponent = () => {
  return (
    <header className='flex justify-between items-center m-2 border-b '>
        <div className="Main flex items-center  p-2 gap-4">
            <div className="Graph">
                <Music />
            </div>
            <div className="Text text-2xl">
                <h1>Musically</h1>
            </div>
        </div>
        <div className="Other flex items-center gap-3 justify-end">
            <Button>
            <Plus/>
            Login
            </Button>
            <Button variant={'outline'} className={'sm:flex hidden'}>
                Explore Premium
            </Button>
            <button className='Avatar'>
                <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' className='rounded-full w-10'/>
                </Avatar>
            </button>
        </div>
   </header>
  )
}

export default HeaderComponent