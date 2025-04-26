import { Gift, Map, Medal, Plane } from "lucide-react";
import { Card } from "../../../components";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Medal className="size-12 text-primary"/>,
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <Map className="size-12 text-primary"/>,
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <Plane className="size-12 text-primary"/>,
    title: "Scalability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <Gift className="size-12 text-primary"/>,
    title: "Gamification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="!bg-gray-50 border border-gray-200"
          >
            <Card.Header className="border-b-0">
              <p className="text-2xl font-semibold leading-none tracking-tight grid gap-4 place-items-center text-black">
                {icon}
                {title}
              </p>
            </Card.Header>
            <Card.Body className="pt-0 text-gray-700">{description}</Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};
