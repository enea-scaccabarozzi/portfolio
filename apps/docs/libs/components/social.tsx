import { GitHubIcon } from 'nextra/icons';

export const Github = () => {
  return (
    <a
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      href="https://github.com/enea-scaccabarozzi/portfolio"
      rel="noreferrer"
      target="_blank"
      title="GitHub repo"
    >
      <GitHubIcon />
    </a>
  );
};
