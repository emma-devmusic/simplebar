import { FAQList, FAQProps } from "../../../common/definitions/constants";
import { Collapsible } from "../../../components";

export const FAQ = () => {
    return (
        <section
            id="faq"
            className="container px-10"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Preguntas
                </span>
                {" "}Frecuentes
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
