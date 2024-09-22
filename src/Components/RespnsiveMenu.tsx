import  { FC } from 'react';

interface ResponsiveMenuProps {
  isOpen: boolean;
}

const ResponsiveMenu: FC<ResponsiveMenuProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden">
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;
