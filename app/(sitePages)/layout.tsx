import NavBar from "./_components/NavBar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-0 lg:px-[8%] mx-auto'>
      <div className='w-full flex'>
        <div className='w-[9%] lg:w-[18%] h-screen'>
          <NavBar />
        </div>
        <div className='w-[91%] lg:w-[82%]'>{children}</div>
      </div>
    </div>
  );
};

export default SiteLayout;
