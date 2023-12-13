import { ProjectPage } from '@portfolio/frontend-features-portfolio/server';

const Page = ({ params }: { params: { slug: string } }) => {
  return <ProjectPage projectSlug={params.slug} />;
};

export default Page;
