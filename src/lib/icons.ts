import { 
  Home, 
  Building2, 
  Building, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  BadgeDollarSign,
  School,
  LucideIcon
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Building2,
  Building,
  Sparkles,
  Clock,
  ShieldCheck,
  BadgeDollarSign,
  School,
};

export const getIcon = (name: string): LucideIcon => {
  return ICON_MAP[name] || Sparkles;
};
