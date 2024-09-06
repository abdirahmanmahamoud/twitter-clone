import NavBar from "./_components/NavBar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-0 lg:px-[8%] mx-auto'>
      <div className='w-full flex'>
        <div className='w-[9%] lg:w-[18%] h-screen fixed'>
          <NavBar />
        </div>
        <div className='w-[91%] lg:w-[82%] ml-[9%] lg:ml-[21.4%]'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;
