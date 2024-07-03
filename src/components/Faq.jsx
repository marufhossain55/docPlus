import { IoIosArrowDown } from 'react-icons/io';

const Faq = () => {
  return (
    <div>
      <h2 className="w-[139px] h-[44px] border rounded-3xl flex justify-center items-center bg-[#FBFBFB] font mb-4">
        Faq
      </h2>
      <h1 className="text-4xl text-[#020043] font-semibold mb-4">
        Frequntly Asked Question
      </h1>
      <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200">
        <details className="group p-4 " open>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden bg-[#FFFFF5] ">
            What are your office hours?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac13 desc-ac13"
            >
              <title id="title-ac13">Open icon</title>
              <desc id="desc-ac13">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </details>
        <details className="group p-4 bg-[#FFFFF5]">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How can I schedule an appointment?
            <IoIosArrowDown className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 text-slate-500">
            You will always get notified about new components through our
            discord and other social accounts. You can also see the newest
            components on the main component page as well as the websites side
            navigation with a "new" badge next to their name.
          </p>
        </details>
        <details className="group p-4 bg-[#FFFFF5]">
          <summary className="bg-[#FFFFF5]relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Do you accept insurance?
            <IoIosArrowDown className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 text-slate-500">
            All updated components will be accompanied by an "updated" badge.
            YOu will be able to see that on our main components page as well as
            our side navigation.
          </p>
        </details>
        <details className="group p-4 bg-[#FFFFF5] ">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            What should I bring to my appointment?
            <IoIosArrowDown className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 text-slate-500">
            You will get notified by us about any major news or releases through
            our newsletter and our social accounts.
          </p>
        </details>
        <details className="group p-4 bg-[#FFFFF5] ">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            What should I bring to my appointment?
            <IoIosArrowDown className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 text-slate-500">
            What should I bring to my appointment?
          </p>
        </details>
      </section>
    </div>
  );
};
export default Faq;
