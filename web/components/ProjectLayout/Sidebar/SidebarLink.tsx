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
          className={`mx-1 mb-2px flex flex-row justify-start items-center cursor-pointer select-none rounded-10 h-12 relative ${
            selected
              ? "text-accent"
              : "text-text"
          }`}
          style={{width: "14.2rem" }}
        >
          <div className="w-5 h-5 ml-5">{image}</div>
          <div className="text-md ml-5 font-bold">{title}</div>
          {selected && <div className="rounded-full bg-accent h-7 w-1 absolute right-0"></div>}
        </div>
      </a>
    </Link>
  );
};
