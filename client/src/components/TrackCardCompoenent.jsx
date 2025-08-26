import React from 'react'
import { Button } from './ui/button';
import { Play } from 'lucide-react';

const TrackCardCompoenent = ({img, name, artist_name}) => {
  return (
     <div className="Card bg-accent p-2 w-fit h-full rounded-md  ">
        <div className="Image-Container w-[15rem] ">
            <img src={img} alt="Track Image" className='rounded-md' />
        </div>
        <div className="Text flex justify-between items-end ">
            <div className="Head text-xl">
                <h1 className='font-bold'>{name}</h1>
                <span className='text-md text-accent-foreground'>{artist_name}</span>
            </div>
            <Button className={'rounded-full'}>
                <Play />
            </Button>
        </div>
    </div>
  )
}

export default TrackCardCompoenent;