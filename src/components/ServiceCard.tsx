
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
}

const ServiceCard = ({ name, price, description }: ServiceCardProps) => {
  return (
    <Card className="hover:border-gold transition-colors">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="font-playfair">{name}</span>
          <span className="text-gold">{price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
