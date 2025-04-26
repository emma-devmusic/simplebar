import { ChartArea, DollarSign, Wallet } from "lucide-react";
import { Card } from "../../../components";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <ChartArea className="size-12" />,
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Wallet className="size-12" />,
  },
  {
    title: "Task Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <DollarSign className="size-12" />,
  },
];

export const Services = () => {
  return (
    <section className="container ">
      <div className="grid lg:grid-cols-2 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card className="rounded-lg border bg-card text-card-foreground shadow-sm border-gray-300" key={title}>
                <Card.Header className="border-b-0 flex flex-col space-y-1.5 p-6 md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <p className="text-2xl font-semibold leading-none tracking-tight text-black">{title}</p>
                    <p className="text-sm text-muted-foreground mt-2 tracking-wider font-normal text-gray-400">
                      {description}
                    </p>
                  </div>
                </Card.Header>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={"https://shadcn-landing-page.vercel.app/assets/cube-leg-DppWNJeX.png"}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
