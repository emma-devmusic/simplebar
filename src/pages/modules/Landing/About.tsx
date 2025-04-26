
interface statsProps {
    quantity: string;
    description: string;
}

const stats: statsProps[] = [
    {
        quantity: "2.7K+",
        description: "Users",
    },
    {
        quantity: "1.8K+",
        description: "Subscribers",
    },
    {
        quantity: "112",
        description: "Downloads",
    },
    {
        quantity: "4",
        description: "Products",
    },
];

export const About = () => {
    return (
        <section
            id="about"
            className="container flex justify-center w-full"
        >
            <div className="bg-gray-50 border border-gray-300 rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={"https://shadcn-landing-page.vercel.app/assets/pilot-CA74Nnvm.png"}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    />
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Company
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </p>
                        </div>


                        <section id="statistics">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map(({ quantity, description }: statsProps) => (
                                    <div
                                        key={description}
                                        className="space-y-2 text-center"
                                    >
                                        <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
                                        <p className="text-xl text-muted-foreground">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};