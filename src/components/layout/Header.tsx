import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Sailboat } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 shadow-sm">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Sailboat className="h-7 w-7 text-primary" />
        <h1 className="text-xl font-headline font-bold">Coastal Concierge</h1>
      </Link>
      {/* Add UserMenu or other header items here if needed */}
    </header>
  );
}
