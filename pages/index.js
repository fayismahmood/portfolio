import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { server } from "../configs";
import img from 'next/image'
export async function getStaticProps(q) {
  console.log(q);

  // Call an external API endpoint to get posts
  const res = await fetch(`https://raw.githubusercontent.com/fayismahmood/portfolio/master/public/portf.json`);
  const _res = await res.json();
  let { types, data } = _res;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: {
      types,
      data,
    },
  };
}

export function Home({ types, data }) {
  return (
    <div className="home">
      <div className="hero flex min-h-screen bg-gradient-to-br from-ecru-100 via-white to-vividburgundy-100">
        <div className="m-auto flex justify-items-end md:flex-row flex-col p-10 max-w-3xl">
          <div className="overflow-hidden md:w-72 ">
            <img className="rounded-full " src="/m.jpeg" alt="" />
          </div>
          <div className="flex">
            <div className="m-auto">
              <div className="text-harvestgold text-xl">Hi, Iam</div>
              <h1 className="text-charcoal text-4xl mb-2">Fayis Mahmood</h1>
              <div className="text-charcoal-200">
                fullstalk developer, and designer focuses on web
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-0 md:-translate-y-56 overflow-hidden portfio md:p-28 p-5  w-full ">
        <div
          style={{ background: "linear-gradient(45deg,#283f47, #644d3d)" }}
          className=" md:p-16 p-8 md:pb-36 md:translate-x-20 translate-x-0 text-white  rounded-3xl md:rounded-4xl "
        >
          <h1 className="text-4xl mb-4">Portfolio</h1>
          <div className="max-w-xl text-white-100 ">
            m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </div>
        </div>
        <div className="contents  -translate-y-36">
          <div className="e  md:translate-x-40 md:-translate-y-20">
            {types ? (
              types.map((eType) => (
                <div key={eType+"key"} className="relative">
                  <h1
                    style={{ width: "100px" }}
                    className="absolute -rotate-90 md:left-10  left-16 bg-white text-charcoal-200 text-2xl bottom-24 whitespace-nowrap -translate-x-full"
                  >
                    {eType}
                  </h1>
                  <div className="flex overflow-scroll">
                    {data
                      .filter((_e) => _e.type == eType)
                      .map((e) => (
                        <div
                        key={e.head+"asdf"}
                          onClick={() => {
                            window.open(e.link);
                          }}
                          className="rounded-t-lg m-10"
                        >
                          <div className="Cont bg-white rounded-2xl shadow-lg shadow-ecru-100 cursor-pointer transition hover:-translate-y-3 hover:shadow-ecru-100 hover:shadow-2xl border-2 border-ecru-100 p-5 w-96">
                            <div className="h-72 overflow-hidden rounded-2xl">
                              {e.pic ? (
                                <img src={`/portpic/${e.pic}`} alt="" />
                              ) : (
                                <div className="h-full w-full bg-gradient-to-t from-charcoal to-ecru-100"></div>
                              )}
                            </div>
                            <h1 className="mt-5 text-2xl text-charcoal-200">
                              {e.head}
                            </h1>
                            <p>{e.disc}</p>

                            <div className="flex flex-wrap">
                              {e.tech.split(",").map((e, i) => (
                                <div
                                  key={i + "_key"}
                                  className=" whitespace-nowrap m-2 bg-charcoal p-1 px-3 text-white-100 rounded-full"
                                >
                                  {e}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <div>Loading..</div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{ background: "linear-gradient(45deg, #f4f0e4, #f0dcdb)" }}
        className="contact m-5 md:m-10 md:-mt-56 rounded-3xl"
      >
        <div className="p-10">
          <h1 className="text-4xl text-vividburgundy">Contact Me</h1>

          <div className="md:m-5">
            <div className="flex flex-wrap">
              <div className="m-2">
                <h3>Name</h3>
                <input
                  className="rounded-xl md:auto w-full hover:border-b-2 border-vividburgundy outline-none mt-2 p-2 "
                  type="text"
                />
              </div>
              <div className="m-2">
                <h3>Email</h3>
                <input
                  className="rounded-xl md:auto w-full hover:border-b-2 border-vividburgundy outline-none mt-2 p-2 "
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="m-2">
                <h3>Message</h3>
                <textarea
                  className="rounded-xl hover:border-b-2 border-vividburgundy outline-none mt-2 p-2 w-full"
                  type="text"
                />
              </div>
            </div>
            <button className="px-5 py-1 bg-gradient-to-tl text-white-100 rounded-full text-xl from-harvestgold to-vividburgundy ">
              Send
            </button>
          </div>

          <div className="flex flex-wrap  w-full px-2  m-auto justify-center ">
            <a href="mailto:fmthottathil@gmail.com" className="cursor-pointer m-2 px-2 bg-white-100 rounded-full">
              <AiOutlineMail size="25" />
            </a>
            <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/fayis-mahmood-0798871ab/" className="cursor-pointer m-2 px-2 bg-white-100 rounded-full">
              <AiOutlineLinkedin size="25" />
            </a>
            <a href="https://github.com/fayismahmood" className="cursor-pointer m-2 px-2 bg-white-100 rounded-full">
              <AiOutlineGithub size="25" />
            </a>
            <a href="https://dribbble.com/fayismahmood" className="cursor-pointer m-2 px-2 bg-white-100 rounded-full">
              <AiOutlineDribbble size="25" />
            </a>
            <a href="https://www.behance.net/fayismahmood" className="cursor-pointer m-2 px-2 bg-white-100 rounded-full">
              <AiOutlineBehance size="25" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

export default Home;
