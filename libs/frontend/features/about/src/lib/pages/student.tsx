import { LayoutComponent } from '@portfolio/frontend-ui-about';

import img from '../assets/student.png';

export const StudentPage = () => {
  return (
    <LayoutComponent
      title="entusiasta"
      text="Consectetur aliquip fugiat est incididunt quis dolore cupidatat. Nostrud tempor do sint qui esse non fugiat cillum ut amet aliqua enim. Cupidatat ad laboris velit minim consequat consequat elit ex labore ipsum. Occaecat sunt aute cillum sunt excepteur irure nulla enim incididunt laborum ea officia aute deserunt."
      imgUrl={typeof img === 'string' ? img : img.src}
    />
  );
};
