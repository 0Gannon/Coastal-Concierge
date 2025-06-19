import AppLayout from '@/components/layout/AppLayout';
import ItineraryCard from '@/components/itinerary/ItineraryCard';
import { mockReservation } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ItineraryPage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <ItineraryCard reservation={mockReservation} />
        
        <Card className="mt-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-center">Enjoy Your Stay!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              We're thrilled to have you! If you need anything, please refer to the Property Guide or use the AI Assistant.
              Don't forget to check out our local recommendations for dining and activities.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
