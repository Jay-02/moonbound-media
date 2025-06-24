import { Card, CardHeader, CardContent} from './ui/card'
import tshirt from "../assets/tshirt.jpg"
import { Button } from './ui/button'
function CardGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <Card className="bg-transparent rounded-lg border border-gray hover:shadow-lg transition-shadow">
        <CardHeader />
        <CardContent className = "brightness-50 hover:brightness-100 scale-105">
            <img src ={tshirt} className='object-contain'/>
        </CardContent>
        <div className = "flex justify-center">
            <Button className = "bg-secondary rounded-md">Something</Button>
            </div>
      </Card>

      {/* Card 2 */}
      <Card className="bg-transparent rounded-lg border border-gray hover:shadow-lg transition-shadow">
        <CardHeader />
        <CardContent className = "brightness-50 hover:brightness-100 scale-105">
            <img src ={tshirt} className='object-contain'/>
        </CardContent>
        <div className = "flex justify-center">
            <Button className = "bg-secondary rounded-md">Something</Button>
            </div>
      </Card>
      <Card className="bg-transparent rounded-lg border border-gray hover:shadow-lg transition-shadow">
        <CardHeader />
        <CardContent className = "brightness-50 hover:brightness-100 scale-105">
            <img src ={tshirt} className='object-contain'/>
        </CardContent>
        <div className = "flex justify-center pb-5">
            <Button className = "bg-secondary rounded-md">Something</Button>
            </div>
      </Card>
    </div>
  </section>
  )
}

export default CardGrid