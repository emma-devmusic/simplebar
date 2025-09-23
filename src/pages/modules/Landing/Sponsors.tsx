import { SponsorProps, sponsors } from "../../../common/definitions/constants";

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container text-gray-500"
    >
      <h2 className="text-center text-md lg:text-2xl font-bold mb-8 text-primary">
        Investors and founders
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
