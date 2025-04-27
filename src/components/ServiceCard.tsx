
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
}

const ServiceCard = ({ name, price, description }: ServiceCardProps) => {
  return (
    <Card className="hover:border-gold transition-colors backdrop-blur-sm bg-white/10 border-white/20 transform hover:-translate-y-1 duration-200">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="font-playfair text-white/90">{name}</span>
          <span className="text-gold font-semibold">{price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
