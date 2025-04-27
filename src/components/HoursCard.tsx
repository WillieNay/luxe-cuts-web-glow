
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday - Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 5:00 PM' },
];

const HoursCard = () => {
  return (
    <Card className="backdrop-blur-sm bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="font-playfair flex items-center gap-2 text-gray-800">
          <Clock className="h-5 w-5" />
          Hours of Operation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {hours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between">
              <span className="font-medium text-gray-700">{schedule.day}</span>
              <span className="text-gray-600">{schedule.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HoursCard;
