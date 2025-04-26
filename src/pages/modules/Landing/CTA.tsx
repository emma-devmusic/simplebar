import { Button } from "../../../components";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-gray-200 py-16 my-24 sm:my-32 px-20"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            In One Interface
          </h2>
          <p className="text-gray-500 text-xl mt-4 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
            sed!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button action={()=>{console.log("mock")}} label="Request a Demo" className="w-full md:mr-4 md:w-auto rounded-lg"/>
          <Button
            label="View all features"
            action={()=>{console.log("mock")}} 
            variant="primary-outline"
            className="w-full md:w-auto rounded-lg"
            />
        </div>
      </div>
    </section>
  );
};
