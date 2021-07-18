import { UseableIcon } from '~/components/Icons';
import { projectPages } from '~/constants/projectPages';

export type ProjectPage = typeof projectPages[number];

export interface ProjectPageProps {
  name: ProjectPage;
  title: string;
  logo: typeof UseableIcon;
}
