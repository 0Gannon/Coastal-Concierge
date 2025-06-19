import type { Recommendation } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MapPin, ExternalLink, Tag } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const defaultImage = "https://placehold.co/600x400.png";
  const imageSrc = recommendation.imageUrl || defaultImage;
  const dataAiHint = recommendation.dataAiHint || "general recommendation";

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
      <div className="relative h-48 w-full">
        <Image 
          src={imageSrc} 
          alt={recommendation.name} 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint={dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-headline">{recommendation.name}</CardTitle>
        {recommendation.address && (
          <CardDescription className="text-xs text-muted-foreground flex items-center pt-1">
            <MapPin className="h-3 w-3 mr-1" /> {recommendation.address}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-3">{recommendation.description}</p>
        {recommendation.savingsInfo && (
          <div className="mt-2 p-2 bg-accent/10 rounded-md text-xs text-accent-foreground flex items-start">
            <Tag className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-accent" />
            <span><strong>Deal:</strong> {recommendation.savingsInfo}</span>
          </div>
        )}
      </CardContent>
      {recommendation.website && (
        <CardFooter className="p-4 bg-muted/20">
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={recommendation.website} target="_blank" rel="noopener noreferrer">
              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
