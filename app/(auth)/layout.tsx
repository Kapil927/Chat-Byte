const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="bg-[url('https://w0.peakpx.com/wallpaper/744/229/HD-wallpaper-whatsapp-cartoon-halloween-black-dark-simple-rock-skull-thumbnail.jpg')] h-full flex items-center justify-center">
      {children}
    </div>
   );
}
 
export default AuthLayout;