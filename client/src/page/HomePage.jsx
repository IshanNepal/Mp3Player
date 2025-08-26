import TrackCardCompoenent from '@/components/TrackCardCompoenent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'


const HomePage = () => {
  const [tracks, setTracks] = useState([])
    // function to handle fetch
    const handleFetch = async () => {
        try{
            const res = await fetch("https://api.jamendo.com/v3.0/tracks?client_id=1cc82f72&limit=20")


            if (!res.ok){
                console.log('Error', res)
                return toast.error('Error , Unsucessfull attepmt at getting tracks')
            }
            const data = await res.json()
            const tracks = data.results;
            console.log(tracks)
            setTracks(tracks)
            toast.success('Sucessfully got all tracks!')

        }
        catch (e) {
            console.log(e)
            toast.error('Network error')
        }
    }
    useEffect(() => {
        handleFetch()
    }, [])
  return (
    <main className='overflow-x-hidden p-4'>
      <section className="search flex  gap-4  items-center flex-row-reverse">
        <Button>
          <Search />
        </Button>
        <Input placeholder={'Search by Name or Title'} className={'w-full sm:w-1/2 md:w-1/3'}/>
      </section>
      <section className='Popular Grid overflow-x-auto'>
        <div className='grid grid-flow-col gap-4 py-4'>
          {tracks.map((track, idx) => (
            <TrackCardCompoenent name={track.name} img={track.album_image} artist_name={track.artist_name} key={idx}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage