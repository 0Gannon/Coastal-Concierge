'use client';

import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import type { Reservation } from '@/types';
import { generateICSContent } from '@/lib/ics';

interface AddToCalendarButtonProps {
  reservation: Reservation;
}

export default function AddToCalendarButton({ reservation }: AddToCalendarButtonProps) {
  const handleAddToCalendar = () => {
    const icsContent = generateICSContent(reservation);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `reservation_${reservation.propertyName.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <Button onClick={handleAddToCalendar} className="mt-4 w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      <CalendarPlus className="mr-2 h-5 w-5" />
      Add to Calendar
    </Button>
  );
}
