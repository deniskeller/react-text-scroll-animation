import React, { useLayoutEffect, useRef } from 'react';
import s from './Main.module.css';

import SplitType from 'split-type';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const mainRef = useRef<HTMLElement | null>(null);

  if (mainRef.current) {
    //   const sections = mainRef.current.childNodes;

    // for (let i = 0; i < sections.length; i++) {
    //   const section = sections[i] as HTMLElement;

    //   section.childNodes.forEach((char, i) => {
    //     const text = new SplitType(char, {
    //       types: 'chars',
    //     });

    //     gsap.from(text.chars, {
    //       scrollTrigger: {
    //         trigger: char,
    //         start: 'top 80%',
    //         end: 'top 20%',
    //         scrub: true,
    //         markers: false,
    //       },
    //       scaleY: 0,
    //       y: -20,
    //       transformOrigin: 'top',
    //       stagger: 0.1,
    //       duration: 1,
    //     });
    //   });
    // }

    const splitTypes = document.querySelectorAll('.scrollText');
    console.log('splitTypes: ', splitTypes);

    splitTypes.forEach((char, i) => {
      const bg = char.getAttribute('data-bg-color');
      const fg = char.getAttribute('data-fg-color');

      const text = new SplitType(char, {
        types: 'chars',
      });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
          scaleY: 0,
          y: -20,
          transformOrigin: 'top',
        },
        {
          scaleY: 1,
          y: 1,
          color: fg,
          duration: 0.1,
          delay: 0.1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            // scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });
  }

  const handleScroll = () => {};

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={s.main} ref={mainRef}>
      <section className={s.section}></section>

      <section className={s.section}>
        <p className="scrollText" data-bg-color="#ccc" data-fg-color="teal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
          dignissimos reprehenderit a voluptas veritatis ad? Itaque, asperiores
          voluptatum.
        </p>
      </section>

      <section className={s.section}>
        <p className="scrollText" data-bg-color="#b6b600" data-fg-color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
          dignissimos reprehenderit a voluptas veritatis ad? Itaque, asperiores
          voluptatum.
        </p>
      </section>

      <section className={s.section}>
        <p className="scrollText" data-bg-color="#353535" data-fg-color="red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab enim
          dignissimos reprehenderit a voluptas veritatis ad? Itaque, asperiores
          voluptatum.
        </p>
      </section>

      <section className={s.section}></section>
    </main>
  );
};

export default Main;
