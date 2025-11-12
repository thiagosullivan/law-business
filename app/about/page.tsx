import NewsHome from "@/components/NewsHome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <section className="bg-[url('https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-1-1.jpg')] bg-cover bg-center text-white font-playfair flex justify-center items-center flex-col gap-y-4 py-36 px-2">
        <h1 className="text-6xl">About Us</h1>
        <p className="text-center text-2xl max-w-[580px]">
          All people are equal before the law. A good attorney is what makes a
          difference.
        </p>
      </section>
      <section className="border-b border-gray-300 mb-24">
        <div className="centered-element py-24">
          <p className="text-gray-400 text-center font-playfair mb-4 text-lg">
            Who we Are
          </p>
          <h2 className="text-gray-900 text-center font-playfair text-4xl mb-8">
            All <span className="text-gray-500">people are equal</span> before
            the law. A <span className="text-primary">good attorney</span> is
            what makes a difference.
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Never expected to get such a powerful theme for this little money!
            It’s a pleasure to work with, seems it just guesses my thoughts! I
            was looking for a really powerful corporate theme for my website,
            that would allow formatting and very Diverse content representation.
            Now I’ve found it! Never expected to get such a powerful theme for
            this little money! It’s a pleasure to work with, seems it just
            guesses my thoughts! I was looking for a really powerful corporate
            theme for my website, that would allow formatting and very Diverse
            content representation. Now I’ve found it!
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="w-[575px] h-[460px] relative">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-2-1.jpg"
                alt="about"
                fill
                sizes="575px"
                className="object-cover"
              />
            </div>
            <div className="w-[575px] h-[460px] relative">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-3-1.jpg"
                alt="about"
                fill
                sizes="575px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-gray-300 mb-24">
        <div className="centered-element pb-24 flex items-center justify-baseline gap-6">
          <div className="w-[600px] h-[740px] relative">
            <Image
              src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-4-1.jpg"
              alt="About"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="max-w-[435px] text-neutral-900 ml-10">
            <h3 className="font-playfair text-4xl mb-8">Our Mission</h3>
            <p className="text-justify mb-4 text-neutral-600">
              Never expected to get such a powerful theme for this little money!
              It’s a pleasure to work with, seems it just guesses my thoughts!
            </p>

            <p className="text-justify mb-4 text-neutral-600">
              I was looking for a really powerful corporate theme for my
              website, that would allow formatting and very Diverse content
              representation. Now I’ve found it! Never expected to get such a
              powerful theme for this little money! It’s a pleasure to work
              with, seems it just guesses my thoughts!
            </p>
            <p className="text-justify mb-4 text-neutral-600">
              I was looking for a really powerful corporate theme for my
              website, that would allow formatting and very Diverse content
              representation. Now I’ve found it!
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-gray-300 mb-24">
        <div className="centered-element pb-24">
          <div className="flex items-stretch justify-center">
            <div className="border border-gray-300 bg-gray-100 p-10 max-w-[500px] flex flex-col justify-center">
              <p className="font-playfair text-lg text-neutral-500 mb-6">
                Need Help?
              </p>
              <h3 className="text-neutral-900 font-playfair text-5xl mb-6">
                Helping <span className="text-primary">clients</span> find legal
                clarity and <span className="text-gray-500">peace of mind</span>
              </h3>
              <p className="text-gray-500 mb-8">
                Our team, trusted partnerships with our suppliers, and,
                crucially, you make this all possible
              </p>
              <Link href="/" className="font-playfair text-lg">
                Get Directions ⟶
              </Link>
            </div>
            <div className="w-[470px] h-[650px] relative">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-5-1.jpg"
                alt="About"
                fill
                sizes="470px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <NewsHome />
    </main>
  );
};

export default AboutPage;
