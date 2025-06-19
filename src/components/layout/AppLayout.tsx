'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarInset,
} from '@/components/ui/sidebar';
import Header from './Header';
import NavItem from './NavItem';
import { CalendarDays, Home, MessageSquare, MapPin, Sailboat } from 'lucide-react';
import Link from 'next/link';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="left" variant="sidebar" collapsible="icon" className="border-r">
        <SidebarHeader className="p-4">
           <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Sailboat className="h-7 w-7 text-primary hidden group-data-[collapsible=icon]:block" />
            <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
               <Sailboat className="h-7 w-7 text-primary" />
               <span className="font-bold text-xl font-headline">Coastal Concierge</span>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavItem href="/itinerary" icon={CalendarDays} label="My Itinerary" tooltip="Itinerary" />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <NavItem href="/property-guide" icon={Home} label="Property Guide" tooltip="Property Guide" />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <NavItem href="/chat" icon={MessageSquare} label="AI Assistant" tooltip="Chat" />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <NavItem href="/recommendations" icon={MapPin} label="Recommendations" tooltip="Recommendations" />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        {/* <SidebarFooter>Footer content if any</SidebarFooter> */}
      </Sidebar>
      <SidebarInset className="flex flex-col flex-1 overflow-y-auto">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
