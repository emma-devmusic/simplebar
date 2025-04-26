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
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="border border-gray-300">
            <Card.Header className="flex flex-col space-y-1.5 py-6 !text-black !border-b-transparent shadow-sm">
              <p className="text-2xl font-semibold leading-none tracking-tight">{title}</p>
            </Card.Header>

            <Card.Body className="pt-0 border-b-0">{description}</Card.Body>

            <Card.Footer className="flex items-center p-6 pt-0 bg-transparent">
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
