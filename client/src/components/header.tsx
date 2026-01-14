import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { BusFront, LogOut } from 'lucide-react';
import { useState } from 'react';
import { AuthModal } from './auth-modal';

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
             <div className="flex items-center space-x-3">
  <div className="w-10 h-10 rounded-full overflow-hidden">
    <img
      src="https://res.cloudinary.com/ddtbj3hej/image/upload/v1757174586/BackgroundEraser_20250906_184426881_xl7mhj.png"
      alt="ZetuBridge Logo"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 shadow-md"
    />
  </div>
  <h1 className="text-2xl font-bold text-dark font-poppins">ZetuBridge</h1>
</div>
            
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-3">
                <span className="text-dark font-medium">
  Welcome back, <span className="font-semibold">{user.name}</span>!
</span>
<Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-primary hover:text-primary/80"
                >
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowAuthModal(true)}
                className="gradient-bg text-white hover:opacity-90"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
                
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
