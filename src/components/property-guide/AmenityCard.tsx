'use client';

import type { Amenity } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight, Info } from 'lucide-react';

interface AmenityCardProps {
  amenity: Amenity;
}

export default function AmenityCard({ amenity }: AmenityCardProps) {
  const IconComponent = amenity.icon || Info;

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-headline flex items-center">
          <IconComponent className="mr-3 h-6 w-6 text-accent" />
          {amenity.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-4 min-h-[40px]">
          {amenity.description}
        </CardDescription>
        {amenity.instructions && amenity.instructions.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full text-accent border-accent hover:bg-accent/10">
                View Instructions <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline flex items-center">
                  <IconComponent className="mr-3 h-6 w-6 text-accent" />
                  {amenity.name} Instructions
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] p-1 pr-4">
                <div className="space-y-4 py-4">
                  {amenity.instructions.map((instr, index) => (
                    <div key={index} className="p-3 border rounded-md bg-secondary/30">
                      <h4 className="font-semibold mb-1">{instr.title}</h4>
                      {instr.format === 'pdfLink' && instr.url ? (
                        <a
                          href={instr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Open PDF Manual
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{instr.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <DialogFooter>
                 <DialogTrigger asChild>
                    <Button variant="outline">Close</Button>
                  </DialogTrigger>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
}
