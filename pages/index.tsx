import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Page from '@/components/utility/Page';
// import Posts from "@/components/home/Posts";
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import AboutMe from '@/components/home/AboutMe';
import Education from '@/components/home/Education';
import Stats from '@/components/home/Stats';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <div className="dark:text-white">
      <Page
        currentPage="Home"
        meta={{
          desc: "I'm a passionate software developer.",
        }}
      >
        <div className="text-black dark:text-white">
          <Hero />
          <div className="space-y-16 mt-10 ">
            <AboutMe />
            <Projects />
            <Skills />
            {/* <Education /> */}
            <Stats />
            {/* <Testimonials /> */}
            {/* <Posts allPosts={allPosts} /> */}
          </div>
          <CTA />
        </div>
        <ToastContainer />
      </Page>
    </div>
  );
}
