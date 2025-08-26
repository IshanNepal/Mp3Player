import { Slider } from "@radix-ui/react-slider"
import { Play, Pause, Forward, Rewind, Volume } from "lucide-react"
import { Progress } from "./ui/progress"
import { cn } from "@/lib/utils"

const TrackPlayerCard = ({img, title, name}) => {
  return (
    <div className="MusicPlayer fixed p-2 border-t bottom-0 w-full flex justify-between items-end gap-8">
        <div className="Main flex flex-col justify-center items-start w-full">
            <div className="SongInfo flex items-center gap-4">
                <img src={img} alt="Img" className="w-20 rounded-2xl"/>
                <div className="Text">
                    <h1 className="text-2xl font-semibold text-primary">{title}</h1>
                    <span className="text-md ">{name}</span>
                </div>
            </div>
            <div className="Controls flex gap-2 text-xl my-2">
                <Rewind />
                <Play/>
                <Forward/>
            </div>
            <Progress/>
        </div>
        <div className="">
            <Slider defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]")}
            />
            <Volume/>
        </div>
    </div>
  )
}

export default TrackPlayerCard