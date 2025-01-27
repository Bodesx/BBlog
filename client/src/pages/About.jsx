/* eslint-disable no-unused-vars */

import Container from "../components/Container";
import PLayout from "../components/P-layout"; // Importing PLayout
import React from "react";
import portraitImage from "../assets/replicate-prediction-p33fv0sjgdrj60chybqv7h2va4 (3).png";
import EncryptButton from "../components/dcryptbutton";
import Example from "../components/dcryptbutton";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <PLayout> {/* Utilizing PLayout component */}
      <Container className="">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={portraitImage}
                alt="image"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Turning Passion Into Purpose, Creativity and Technology Inspires Change 
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m Lawanson Olubode, but my friends call me Bodesx. Welcome to my first blog! 
                I’m passionate about art, music, creativity, and technology. I’m also a fan of the History Channel and living the good life. 
                While I embrace everything technology offers, I try to avoid the negativity it can bring. I love solving problems
                (though I’m not fond of creating them). As a Pisces by chance, 
                I navigate life with curiosity and resilience. Oh, and I’m a lifelong Arsenal fan—stage 4, no cure in sight! 😄
              </p>
              <p>
                My fascination with the big screen sparked a desire to create beautiful things, 
                which led me to explore graphical tools like CorelDRAW and other graphic design software. 
                My journey into IT truly began when my computer broke down. Determined to fix it, 
                I dove into research, learning as much as I could. Not only did I manage to repair my PC, 
                but I also started helping friends with their tech issues, marking the start of my passion for technology.  
              </p>
              <p>
                Today, I’m thriving in the I.T business, where I am working as
                an I.T technician. I’m also a self-taught web developer, a biotechnologist, and an A.I enthusiast. 
                I believe that technology has the power to change the world,
                and I am excited to continue learning and exploring its infinite potential.
                <em>Did</em> I mention I like space? My space, not that space; I am frightened by it. 
               
              </p>
                <EncryptButton>
                      <Link to="/dcrypt">ppppp</Link>
                    </EncryptButton>
            </div>
          </div>
        </div>
      </Container>
    </PLayout>
  );
}
