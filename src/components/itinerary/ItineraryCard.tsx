import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import type { Reservation } from '@/types';
import { MapPin, Users, CalendarDays, Clock } from 'lucide-react';
import AddToCalendarButton from './AddToCalendarButton';

interface ItineraryCardProps {
  reservation: Reservation;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default function ItineraryCard({ reservation }: ItineraryCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl transform transition-all duration-500 hover:scale-105">
      <CardHeader className="bg-primary/20 p-6 rounded-t-lg">
        <CardTitle className="text-3xl font-headline text-primary-foreground flex items-center">
          <CalendarDays className="mr-3 h-8 w-8" />
          Your Stay at {reservation.propertyName}
        </CardTitle>
        <CardDescription className="text-primary-foreground/80 text-md">
          Reservation ID: {reservation.id}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Reservation Details</h3>
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <p className="font-medium">Location:</p>
              <p className="text-muted-foreground">{reservation.address}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="h-6 w-6 text-accent mt-1 shrink-0" />
            <div>
              <p className="font-medium">Guest:</p>
              <p className="text-muted-foreground">{reservation.guestName} ({reservation.numberOfGuests} guests)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-secondary/50 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-2 flex items-center"><Clock className="mr-2 h-5 w-5 text-accent" />Check-in</h4>
            <p className="text-foreground text-xl">{formatDate(reservation.checkInDate)}</p>
            <p className="text-muted-foreground text-lg">From {formatTime(reservation.checkInDate)}</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-2 flex items-center"><Clock className="mr-2 h-5 w-5 text-accent" />Check-out</h4>
            <p className="text-foreground text-xl">{formatDate(reservation.checkOutDate)}</p>
            <p className="text-muted-foreground text-lg">By {formatTime(reservation.checkOutDate)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 rounded-b-lg flex justify-center">
        <AddToCalendarButton reservation={reservation} />
      </CardFooter>
    </Card>
  );
}
