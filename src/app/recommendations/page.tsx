import AppLayout from '@/components/layout/AppLayout';
import RecommendationCard from '@/components/recommendations/RecommendationCard';
import { mockRecommendations } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Recommendation } from '@/types';

const groupRecommendations = (recommendations: Recommendation[]) => {
  return recommendations.reduce((acc, rec) => {
    (acc[rec.type] = acc[rec.type] || []).push(rec);
    return acc;
  }, {} as Record<Recommendation['type'], Recommendation[]>);
};


export default function RecommendationsPage() {
  const groupedRecommendations = groupRecommendations(mockRecommendations);
  const recommendationTypes: Recommendation['type'][] = ['dining', 'entertainment', 'activity'];


  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <Card className="mb-10 shadow-lg">
          <CardHeader className="bg-primary/10 text-center">
            <CardTitle className="text-3xl font-headline">Local Recommendations & Savings</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-1">
              Discover the best of Ocean City! Here are some curated spots for dining, entertainment, and activities, along with available deals.
            </CardDescription>
          </CardHeader>
        </Card>

        {recommendationTypes.map((type) => (
          groupedRecommendations[type] && groupedRecommendations[type].length > 0 && (
            <section key={type} className="mb-12">
              <h2 className="text-2xl font-headline font-semibold mb-6 capitalize text-center">
                {type}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedRecommendations[type].map((recommendation) => (
                  <RecommendationCard key={recommendation.id} recommendation={recommendation} />
                ))}
              </div>
            </section>
          )
        ))}
        {mockRecommendations.length === 0 && (
          <p className="text-center text-muted-foreground text-lg">No recommendations available at this time. Please check back later!</p>
        )}
      </div>
    </AppLayout>
  );
}
