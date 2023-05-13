import { ComputerDesktopIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export const Footer = () => {
  return (
    <footer className="flex justify-center space-x-4 text-sky-300 text-xs my-4">
      <div>
        <a
          href="https://github.com/YutaGoto/hyrule-selfy-compendium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ComputerDesktopIcon className="h-6 w-6" />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/gggooottto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserCircleIcon className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};
