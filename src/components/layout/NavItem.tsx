'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import type { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  tooltip?: string;
}

export default function NavItem({ href, icon: Icon, label, tooltip }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      variant="default"
      size="default"
      tooltip={tooltip || label}
      className={cn(
        "justify-start",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
      )}
    >
      <Link href={href}>
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    </SidebarMenuButton>
  );
}
