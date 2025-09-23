import { TestimonialProps, testimonials } from "../../../common/definitions/constants";
import { Avatar, Card } from "../../../components";


export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-gray-500 pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="rounded-lg border bg-card border-gray-200 text-card-foreground shadow-sm max-w-md md:break-inside-avoid overflow-hidden"
            >
              <Card.Header className="flex space-y-1.5 items-center gap-4 pb-2 border-b-0">
                <Avatar className="relative flex shrink-0 overflow-hidden rounded-full" img={image}>
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-lg font-semibold leading-none tracking-tight text-black">{name}</p>
                  <p className="text-sm text-gray-500 pt-1">{userName}</p>
                </div>
              </Card.Header>

              <Card.Body className="pt-0 text-gray-700">{comment}</Card.Body>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
