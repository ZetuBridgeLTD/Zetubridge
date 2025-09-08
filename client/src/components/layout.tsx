import { Header } from './header';
import { BottomNavigation } from './bottom-navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-nav">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}
