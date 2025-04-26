import { Check, Github, Lightbulb, Linkedin } from "lucide-react";
import { Avatar, Badge, Button, Card } from "../../../components";
import { ParallaxLayer } from "@react-spring/parallax";

export const Hero = () => {
    return (
        <ParallaxLayer offset={0} speed={1}>
            <section className="px-6 flex justify-center items-center pt-20 gap-10">
                <div className="text-center lg:text-start space-y-6 w-full lg:w-1/2">
                    <main className="text-5xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                                Shadcn
                            </span>{" "}
                            landing page
                        </h1>{" "}
                        for{" "}
                        <h2 className="inline">
                            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                                React
                            </span>{" "}
                            developers
                        </h2>
                    </main>

                    <p className="text-xl text-muted-foreground lg:w-10/12 mx-auto lg:mx-0">
                        Build your React landing page effortlessly with the required sections
                        to your project.
                    </p>

                    <div className="space-y-4 justify-center flex-col lg:flex-row lg:justify-start items-center flex lg:space-y-0 lg:space-x-4">
                        <Button label="Get Started" action={() => { console.log("mock") }} className="w-full lg:w-1/3" />

                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                            target="_blank"
                            className={`flex shrink-0 rounded border w-full justify-center lg:w-1/3 px-4.5 py-2.5 text-sm font-medium transition-all hover:cursor-pointer focus:ring-1 active:translate-y-[1px] disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-200 disabled:active:translate-y-[0px] border-primary text-primary hover:text-white hover:bg-primary-hover`}
                        >
                            Github Repository
                            <Github className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Hero cards sections */}
                <div className="w-full lg:w-1/2 hidden lg:block">
                    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
                        {/* Testimonial */}
                        <ParallaxLayer offset={0} speed={1}>
                            <Card className="absolute border border-gray-200  w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                                <Card.Header className="flex flex-row items-center gap-4 pb-2 border-b-0">
                                    <Avatar img="https://github.com/shadcn.png" />

                                    <div className="flex flex-col">
                                        <p className="text-lg flex flex-col space-y-1.5">John Doe React</p>
                                        <p className="text-sm text-muted-foreground">@john_doe</p>
                                    </div>
                                </Card.Header>

                                <Card.Body className="p-6 pt-0">This landing page is awesome!</Card.Body>
                            </Card>
                        </ParallaxLayer>

                        {/* Team */}
                        <ParallaxLayer offset={0} speed={1.5}>
                            <Card className="absolute border border-gray-200 right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                                <Card.Header className="border-b-0 mt-8 flex flex-col justify-center items-center pb-2 gap-1">
                                    <img
                                        src="https://i.pravatar.cc/150?img=58"
                                        alt="user avatar"
                                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                    />
                                    <p className="text-center text-2xl flex flex-col pt-1.5">Leo Miranda</p>
                                    <p className="text-sm text-muted-foreground font-normal text-primary">
                                        Frontend Developer
                                    </p>
                                </Card.Header>

                                <Card.Body className="p-6 pt-0 text-center pb-2">
                                    <p>
                                        I really enjoy transforming ideas into functional software that
                                        exceeds expectations
                                    </p>
                                </Card.Body>

                                <Card.Footer className="flex items-center pb-6 pt-0 bg-transparent">
                                    <a
                                        rel="noreferrer noopener"
                                        href="https://github.com/leoMirandaa"
                                        target="_blank"
                                        className="hover:bg-gray-100 hover:text-accent-foreground rounded-md p-2.5"
                                        style={{ zIndex: "999 !important" }}
                                    >
                                        <span className="sr-only">Github icon</span>
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        rel="noreferrer noopener"
                                        href="https://twitter.com/leo_mirand4"
                                        target="_blank"
                                        className={"hover:bg-gray-100 hover:text-accent-foreground rounded-md p-2.5"}
                                    >
                                        <span className="sr-only">X icon</span>
                                        <svg
                                            role="img"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-foreground w-5 h-5"
                                        >
                                            <title>X</title>
                                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                        </svg>
                                    </a>

                                    <a
                                        rel="noreferrer noopener"
                                        href="https://www.linkedin.com/in/leopoldo-miranda/"
                                        target="_blank"
                                        className={"hover:bg-gray-100 hover:text-accent-foreground rounded-md p-2.5"}
                                    >
                                        <span className="sr-only">Linkedin icon</span>
                                        <Linkedin size="20" />
                                    </a>
                                </Card.Footer>
                            </Card>
                        </ParallaxLayer>

                        {/* Pricing */}
                        <ParallaxLayer offset={0} speed={2}>
                            <Card className="absolute border p-2 border-gray-200 top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                                <Card.Header className="border-b-0 pb-1 flex flex-col gap-1">
                                    <p className="flex item-center text-black justify-between text-2xl font-semibold leading-none tracking-tight">
                                        Free
                                        <Badge
                                            variant="outlined"
                                            className="text-primary"
                                        >
                                            Most popular
                                        </Badge>
                                    </p>
                                    <div>
                                        <span className="text-3xl text-black font-bold">$0</span>
                                        <span className="text-sm text-gray-500 text-muted-foreground spacing-"> /month</span>
                                    </div>

                                    <p className="text-sm text-gray-500 font-normal">
                                        Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
                                    </p>
                                </Card.Header>

                                <Card.Body className="border-b border-gray-300">
                                    <Button label="Start Free Trial" action={() => { console.log("mock") }} className="w-full" />
                                </Card.Body>

                                <Card.Footer className="flex bg-transparent">
                                    <div className="space-y-4">
                                        {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
                                            (benefit: string) => (
                                                <span
                                                    key={benefit}
                                                    className="flex"
                                                >
                                                    <Check className="text-green-500" />{" "}
                                                    <h3 className="ml-2">{benefit}</h3>
                                                </span>
                                            )
                                        )}
                                    </div>
                                </Card.Footer>
                            </Card>
                        </ParallaxLayer>

                        {/* Service */}

                        <ParallaxLayer offset={0} speed={1.2}>
                            <Card className="z-20 absolute w-[350px]  right-0 bottom-[100px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                                <Card.Header className="space-y-1 flex lg:flex-row justify-start items-start gap-4 p-6">
                                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                                        <Lightbulb />
                                    </div>
                                    <div>
                                        <p className="text-2xl !font-medium leading-none tracking-tight text-black">Light & dark mode</p>
                                        <p className="text-base font-normal text-gray-400 mt-2 text-muted-foreground pe-3">
                                            Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
                                            natusm.
                                        </p>
                                    </div>
                                </Card.Header>
                            </Card>
                        </ParallaxLayer>
                    </div>
                </div>
            </section>
        </ParallaxLayer>
    );
};
