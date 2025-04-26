import { Check } from "lucide-react";
import { Badge, Button, Card } from "../../../components";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border !border-gray-200"
                : " border !border-gray-200"
            }
          >
            <Card.Header className="flex flex-col space-y-1.5 border-b-0">
              <p className="text-2xl font-semibold leading-none tracking-tight flex item-center justify-between text-black">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="solid"
                    className="!text-sm text-secondary border-secondary bg-transparent"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </p>
              <div>
                <span className="text-3xl font-bold text-black">${pricing.price}</span>
                <span className="text-gray-400 font-normal"> /month</span>
              </div>

              <p className="text-sm text-gray-400">{pricing.description}</p>
            </Card.Header>

            <Card.Body className="pt-0">
              <Button label={pricing.buttonText} action={()=>{console.log("mock")}} className="w-full rounded-lg" />
            </Card.Body>

            <hr className="w-4/5 m-auto mb-4 text-gray-400 " />

            <Card.Footer className="flex items-center pt-0 bg-transparent">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
