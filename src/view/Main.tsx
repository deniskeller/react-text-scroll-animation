import React, { useEffect, useLayoutEffect, useRef } from 'react';
import s from './Main.module.css';

import SplitType from 'split-type';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const mainRef = useRef<HTMLElement | null>(null);

  if (mainRef.current) {
    const sections = mainRef.current.childNodes;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;

      section.childNodes.forEach((char, i) => {
        const text = new SplitType(char, {
          types: 'chars',
        });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });
    }
  }

  const handleScroll = () => {};

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className={s.main} ref={mainRef}>
        <section className={s.section}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
            dignissimos reprehenderit a voluptas veritatis ad? Itaque,
            asperiores voluptatum.
          </p>
        </section>

        <section className={s.section}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
            dignissimos reprehenderit a voluptas veritatis ad? Itaque,
            asperiores voluptatum.
          </p>
        </section>

        <section className={s.section}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
            dignissimos reprehenderit a voluptas veritatis ad? Itaque,
            asperiores voluptatum.
          </p>
        </section>

        <section className={s.section}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
            dignissimos reprehenderit a voluptas veritatis ad? Itaque,
            asperiores voluptatum.
          </p>
        </section>

        <section className={s.section}></section>
      </main>
    </ReactLenis>
  );
};

export default Main;
