import AppLayout from '@/components/layout/AppLayout';
import AmenityCard from '@/components/property-guide/AmenityCard';
import { mockPropertyGuide } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ListChecks, ShieldAlert, Phone } from 'lucide-react';

export default function PropertyGuidePage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-3xl font-headline text-center">Property Guide</CardTitle>
            <CardDescription className="text-center text-lg text-muted-foreground mt-1">
              {mockPropertyGuide.welcomeMessage}
            </CardDescription>
          </CardHeader>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-headline font-semibold mb-6 text-center">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPropertyGuide.amenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center">
                  <ListChecks className="mr-3 h-7 w-7 text-accent" />
                  House Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {mockPropertyGuide.houseRules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center">
                  <ShieldAlert className="mr-3 h-7 w-7 text-destructive" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockPropertyGuide.emergencyContacts.map((contact, index) => (
                    <li key={index} className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-accent" />
                      <span className="font-medium">{contact.name}:</span>
                      <a href={`tel:${contact.phone}`} className="ml-2 text-accent hover:underline">{contact.phone}</a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
