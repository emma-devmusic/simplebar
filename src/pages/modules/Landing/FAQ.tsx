import { Collapsible } from "../../../components";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Is this template free?",
        answer: "Yes. It is a free ChadcnUI template.",
        value: "item-1",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
        value: "item-2",
    },
    {
        question:
            "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
        value: "item-3",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        value: "item-4",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
        value: "item-5",
    },
];

export const FAQ = () => {
    return (
        <section
            id="faq"
            className="container  !px-0"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Questions
                </span>
            </h2>
                {FAQList.map(({ question, answer, value }: FAQProps) => (
                    <Collapsible
                        key={value}
                        name={question}
                        className="!bg-transparent !border-x-0 !border-[3px] !border-t-0"
                    >

                        <div className="overflow-hidden bg-transparent !border-x-0 !border-t-0 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                            <div className="text-muted-foreground text-[16px]">
                                {answer}
                            </div>
                        </div>
                    </Collapsible>
                ))}

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                    rel="noreferrer noopener"
                    href="#"
                    className="text-primary transition-all border-primary hover:border-b-2"
                >
                    Contact us
                </a>
            </h3>
        </section>
    );
};
