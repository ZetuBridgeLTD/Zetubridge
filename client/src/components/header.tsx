import { BusFront } from 'lucide-react';

export function Header() {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo & App Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddtbj3hej/image/upload/v1757174586/BackgroundEraser_20250906_184426881_xl7mhj.png"
                  alt="ZetuBridge Logo"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 shadow-md"
                />
              </div>
              <h1 className="text-2xl font-bold text-dark font-poppins">
                ZetuBridge
              </h1>
            </div>

            {/* Right side intentionally left empty */}
            <div />

          </div>
        </div>
      </header>
    </>
  );
}
