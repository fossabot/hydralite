import Link from "next/link";
import { useRouter } from "next/router";

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
          className={`m-1 flex flex-row justify-start items-center cursor-pointer select-none rounded-10 w-52 h-12 ${
            selected
              ? "bg-white-selected fill-select text-accent"
              : "hover:bg-white-hover bg-transparent fill-text text-text"
          }`}
        >
          <div className="w-5 h-5 ml-5">{image}</div>
          <div className="text-base ml-5 font-semibold">{title}</div>
        </div>
      </a>
    </Link>
  );
};
