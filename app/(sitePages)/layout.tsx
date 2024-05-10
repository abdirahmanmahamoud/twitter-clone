import NavBar from "./_components/NavBar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-0 lg:px-[8%] mx-auto'>
      <div className='grid grid-cols-9 lg:grid-cols-4'>
        <div className='w-full h-screen'>
          <NavBar />
        </div>
        <div className='w-full h-screen col-span-8 lg:col-span-3 pl-1'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;
