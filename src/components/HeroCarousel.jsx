import Autoplay from "embla-carousel-autoplay"
import Stock from '../assets/Stock.png'


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  return (
    <Carousel className="w-full h-[600px] mb-14 flex justify-self-center" plugins = {[
      Autoplay({
        delay:5000
      })
    ]}>
      <CarouselContent >
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card className="flex justify-center border-0 shadow-0">
                <CardContent className="flex h-1/4 w-[100%] justify-center px-40 filter hue-rotate-30 brightness-50 ">
                  <img src={Stock} alt="something" className="h-1/6 w-[100%] -translate-y-56"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
export default HeroCarousel
