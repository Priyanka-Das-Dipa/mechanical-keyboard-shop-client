const FAQ = () => {
  return (
    <div className="container mx-auto pt-24 pb-24 bg-white rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:gap-0 gap-5">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">
            Have a question ? We are <br className="hidden md:block" /> here to
            help.
          </h1>
          <p className="text-base font-normal py-6">
            Check out the full FAQ page or reach out to our customer support
            team.
          </p>
          <button className="rounded-full px-10 py-4 bg-slate-800 text-white text-base font-medium">
            Explore
          </button>
        </div>
        <div className="bg-gray-100 dark:text-gray-800 rounded-2xl ">
          <div className="container flex flex-col justify-center p-4 mx-auto ">
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
              <details open="">
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Optio maiores eligendi molestiae totam dolores similique?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details open="">
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Optio maiores eligendi molestiae totam dolores similique?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details open="">
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Optio maiores eligendi molestiae totam dolores similique?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details open="">
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Modi dolorem veritatis culpa quos consequuntur beatae itaque
                  excepturi perspiciatis?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    aspernatur quae, eos explicabo odit minima libero veniam
                    similique quibusdam doloribus facilis ipsa accusantium vel
                    maiores corrupti! Libero voluptate a doloribus?
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Magni reprehenderit possimus debitis?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    voluptates aspernatur dolores in consequatur doloremque
                    inventore reprehenderit, consequuntur perspiciatis
                    architecto.
                  </p>
                  <p>
                    Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                    veritatis velit quasi cupiditate unde eaque! Iure,
                    voluptatibus autem eaque unde possimus quae.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
