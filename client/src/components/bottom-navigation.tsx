import { Home, Newspaper, Info, Headphones } from 'lucide-react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/news', icon: Newspaper, label: 'News' },
  { path: '/about', icon: Info, label: 'About' },
  { path: '/support', icon: Headphones, label: 'Support' },
];

export function BottomNavigation() {
  const [location, navigate] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  'flex flex-col items-center p-2 transition-colors',
                  isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'
                )}
              >
                <item.icon size={20} className="mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
