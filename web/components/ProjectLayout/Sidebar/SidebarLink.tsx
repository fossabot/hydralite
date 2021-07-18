import Link from 'next/link';
import { useRouter } from 'next/router';

export interface SidebarLinkProps {
  image: React.ReactFragment;
  title: string;
  href: string;
  selected?: boolean;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  selected,
  image,
  title,
  href,
}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Link href={`/project/${id}/${href}`}>
      <a>
        <div
          className={`mx-2 mb-6 flex flex-row justify-start items-center cursor-pointer select-none rounded-10 relative ${
            selected ? "text-accent" : "text-text"
          }`}
          style={{ width: "12.1rem" }}
        >
          <div className="w-4.5 h-4.5 ml-3">{image}</div>
          <div className="hidden lg:block text-md ml-5 font-bold">{title}</div>
          <SelectedIndicator selected={selected} />
        </div>
      </a>
    </Link>
  );
};

const SelectedIndicator = ({ selected }) => {
  return selected ? (
    <div className="rounded-full bg-accent h-7 w-1 absolute right-0 hidden lg:block"></div>
  ) : (
    <></>
  );
};
