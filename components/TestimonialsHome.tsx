import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesL } from "react-icons/ri";

interface TestimonialsData {
  comment: string;
  avatarUrl: string;
  name: string;
  role: string;
}

const testimonialsData: TestimonialsData[] = [
  {
    comment:
      "I read a lot of reviews and decided to turn to this bureau for legal support of business. I don't have many questions but they always come up unexpectedly and it's good to have experienced lawyers on hand. I've been working with them for over a year now. Never failed. I recommend.",
    avatarUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/testimonials-2-3.jpg",
    name: "Barbara Davies",
    role: "Entrepreneur",
  },
  {
    comment:
      "Never expected to get such a powerful theme for this little money! It's a pleasure to work with, seems it just guesses my thoughts! I was looking for a really powerful corporate theme for my website, that would allow formatting and very Diverse content representation. Now I've found it!",
    avatarUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/testimonials-3-3.jpg",
    name: "Bobby Brown",
    role: "IT-specialist",
  },
  {
    comment:
      "When I had a question about buying an apartment, I decided to contact a lawyer to help me support the entire transaction. I was satisfied with the quality of services provided. Reliable sensible lawyers know their business thoroughly. I recommend.",
    avatarUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/testimonials-1-3.jpg",
    name: "Mason Wilson",
    role: "Teacher",
  },
];

const TestimonialsHome = () => {
  return (
    <section className="border-b border-gray-300 mb-24">
      <div className="centered-element mb-24 grid grid-cols-2 gap-6">
        <div className="font-playfair">
          <h3 className="text-muted-foreground text-lg mb-4">Testimonials</h3>
          <p className="text-4xl pb-8">What Our Clients Say</p>
          <Link
            href="/"
            className="text-lg hover:text-primary font-medium transition duration-200"
          >
            Share Your Story →
          </Link>
        </div>
        {testimonialsData.map((data, index) => (
          <div className="border border-gray-300 p-10" key={index}>
            <div className="flex items-start">
              <div className="w-[60px] h-[60px] mr-6">
                <RiDoubleQuotesL className="text-6xl text-primary" />
              </div>
              <p className="mb-5 text-muted-foreground">{data.comment}</p>
            </div>
            <div className="flex items-center">
              <Image
                src={data.avatarUrl}
                alt={data.name}
                width={60}
                height={60}
                className="rounded-full mr-6"
              />
              <div>
                <p className="font-playfair text-lg font-medium">{data.name}</p>
                <p className="text-muted-foreground">{data.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsHome;
