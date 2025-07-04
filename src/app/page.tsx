
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
          <div className="relative h-64 w-full">
            <Image 
              src="/oc-hero-image.jpg" 
              alt="Beautiful view of Ocean City beach and boardwalk" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="ocean city beach"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h1 className="text-5xl font-headline font-bold text-white text-center drop-shadow-lg">
                Welcome to Coastal Concierge!
              </h1>
            </div>
          </div>
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl font-headline">Your Perfect Stay Awaits</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Your companion app for a wonderful stay in Ocean City, MD.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <p className="mb-6 text-lg">
              Navigate using the menu to find your itinerary, property information, chat with our AI assistant, or discover local recommendations and savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/itinerary">View Itinerary</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/recommendations">Explore Local Gems</Link>
              </Button>
            </div>
            <div className="mt-12">
              <div className="relative aspect-[16/6] w-full max-w-3xl mx-auto">
                 <Image
                    src="https://placehold.co/800x300.png"
                    alt="Explore Ocean City"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                    data-ai-hint="ocean city boardwalk"
                  />
              </div>
              <p className="mt-4 text-md text-muted-foreground">
                Discover more beautiful sights and activities around the area.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
