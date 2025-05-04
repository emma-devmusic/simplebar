import { Badge, Card } from "../../../components";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/looking-ahead-DDDoMk_3.png",
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/reflecting-tA1rdXzJ.png",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/growth-DZ7EdHJS.png",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container flex flex-col gap-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="solid"
              className="text-sm border-transparent font-semibold text-secondary-foreground "
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {features.map(({ title, description, image }: FeatureProps) => (
          <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={title}>
            <Card key={title} className="border border-gray-300">
              <Card.Header className="border-b-transparent pt-6 !text-black">
                <p className="text-2xl font-semibold leading-none tracking-tight">{title}</p>
              </Card.Header>

              <Card.Body className="border-b-0">{description}</Card.Body>

              <Card.Footer className="bg-transparent">
                <img
                  src={image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto"
                />
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
