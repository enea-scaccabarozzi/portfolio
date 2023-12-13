import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { HeroText } from '../shared/heading';
import gradients from '../shared/styles/gradients.module.css';
import { FadeIn } from '../shared/fade-in';
import { CTAButton } from '../shared/CTA-button';
import { Gradient } from '../shared/gradient';

export const LetterComponent = () => {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText className="lg:text-[65px]">More Than A Portfolio</HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            Here&apos;s the project, not your usual online portfolio that feels
            more like a dusty diary of achievements. This one&apos;s different -
            it&apos;s dynamic, lives at the pace of your accomplishments, and
            updates almost by itself. Yes, you heard it right: thanks to its
            integrated backoffice system, keeping the portfolio up-to-date is no
            longer a Herculean task. It&apos;s easier than grabbing a coffee.
            This portfolio isn&apos;t just a showcase; it&apos;s an evolving
            story, always in sync with your latest ventures.
          </p>
          <br />
          <p>
            But that&apos;s not all. This project is also a powerhouse
            demonstration of the modern tech stack, T3.1 to be precise.
            It&apos;s not just a platform to display your skills, it&apos;s an
            example of how an advanced stack can simplify every aspect of
            development, from coding to deployment. We use everything: T3 stack
            with SST for AWS deployment, ZenStack to create tRPC procedures from
            Prisma schema files, and NX for organizing the repository. It&apos;s
            not just about making things work but making them work brilliantly,
            following best practices and ensuring scalability.
          </p>
          <br />
          <p>
            And the final twist? This project is like my personal tech sandbox,
            and guess what? I&apos;m inviting everyone to come and play.
            It&apos;s not just about showing off my coding feats; it&apos;s more
            like a cozy corner of the internet where we can all learn and grow
            together. Here, technology isn&apos;t just a tool; it&apos;s a
            conversation starter, a way to connect and share insights. Whether
            you&apos;re a seasoned pro or just curious about coding, this
            portfolio is a space where we can all toss around ideas, learn from
            each other&apos;s experiences, and maybe even have a few laughs
            along the way. So, think of this portfolio not just as a showcase of
            projects, but as a friendly, welcoming tech hangout.
          </p>
        </FadeIn>
        <FadeIn className="relative h-2 md:h-12" noVertical viewTriggerOffset>
          <span
            className={cn(
              'w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute',
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          className="flex items-end justify-center gap-3  md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
          noVertical
          viewTriggerOffset
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Jared Palmer"
              className="rounded-full grayscale"
              src="/landing/letter/scaccabarozzi.jpg"
              height={50}
              width={64}
            />
          </div>
          <div className="flex flex-col">
            <Image
              alt="Enea Scaccabarozzi's hand written signature"
              className="block mt-3 mb-4 ml-3 dark:hidden"
              height={90}
              src="/landing/letter/signature-light.svg"
              width={190}
            />
            <Image
              alt="Enea Scaccabarozzi's hand written signature"
              className="hidden -mt-2 dark:block"
              height={116}
              src="/landing/letter/signature-dark.svg"
              width={209}
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">Enea Scaccabarozzi</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn className="relative flex justify-center w-full mt-16" noVertical>
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link className="block py-3 font-sans" href="/docs">
              Start Building
            </Link>
          </CTAButton>
        </div>
        <Gradient
          className="bottom-[-200px] -z-10 opacity-20"
          conic
          height={300}
          width={1200}
        />
      </FadeIn>
    </section>
  );
};
