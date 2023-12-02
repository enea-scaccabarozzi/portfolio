import Image from 'next/image';
import Link from 'next/link';

import { HeroText, SectionSubtext } from '../shared/heading';
import { Gradient } from '../shared/gradient';
import { FadeIn } from '../shared/fade-in';
import { CTAButton } from '../shared/CTA-button';

export const HeroComponent = () => {
  return (
    <FadeIn
      className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0"
      noVertical
    >
      <div className="mt-10" />
      <FadeIn className="z-50 flex items-center justify-center w-full ">
        <div className="absolute min-w-[614px] min-h-[614px]">
          <Image
            alt="Portfolio"
            className="hidden dark:block"
            height={614}
            src="/landing/hero/circles-dark.svg"
            width={614}
          />
          <Image
            alt="Portfolio"
            className="block dark:hidden"
            height={614}
            src="/landing/hero/circles-light.svg"
            width={614}
          />
        </div>
        <div className="absolute z-50 flex items-center justify-center w-64 h-64">
          <Gradient
            className="dark:opacity-100 opacity-40"
            conic
            height={120}
            small
            width={120}
          />
        </div>

        <div className="w-[120px] h-[120px] z-50">
          <Image
            alt=""
            className="hidden dark:block"
            height={120}
            src="/landing/hero/logo-dark.svg"
            width={120}
          />
          <Image
            alt=""
            className="block dark:hidden"
            height={120}
            src="/landing/hero/logo-light.svg"
            width={120}
          />
        </div>
      </FadeIn>
      <Gradient
        className="top-[-500px] dark:opacity-20 opacity-[0.15]"
        conic
        height={1000}
        width={1000}
      />
      <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
      <div className="mt-10" />
      <FadeIn
        className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
        delay={0.15}
      >
        <HeroText h1>Kickstart Your Portfolio</HeroText>
        <SectionSubtext hero>
          A Flexible, Fun, Ready-to-Use Template for Creatives
        </SectionSubtext>
      </FadeIn>
      <FadeIn
        className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6"
        delay={0.3}
      >
        <div className="flex flex-col w-full gap-3 md:!flex-row">
          <CTAButton>
            <Link className="block py-3" href="/docs">
              Get Started
            </Link>
          </CTAButton>
          <CTAButton outline>
            <a
              className="block py-3"
              href="https://github.com/enea-scaccabarozzi/Portfolio"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </CTAButton>
        </div>
        <p className="text-sm text-[#666666]">License: MIT</p>
      </FadeIn>
      <FadeIn className="relative w-full" delay={0.5}>
        <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
      </FadeIn>
    </FadeIn>
  );
};
