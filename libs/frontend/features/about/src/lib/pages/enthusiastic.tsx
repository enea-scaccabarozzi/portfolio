import { LayoutComponent } from '@portfolio/frontend-ui-about';

import img from '../assets/enthusiast.png';

export const EnthusiasticPage = () => {
  return (
    <LayoutComponent
      title="Entusiasta"
      text="Consectetur aliquip fugiat est incididunt quis dolore cupidatat. Nostrud tempor do sint qui esse non fugiat cillum ut amet aliqua enim. Cupidatat ad laboris velit minim consequat consequat elit ex labore ipsum. Occaecat sunt aute cillum sunt excepteur irure nulla enim incididunt laborum ea officia aute deserunt."
      imgUrl={typeof img === 'string' ? img : img.src}
    />
  );
};
