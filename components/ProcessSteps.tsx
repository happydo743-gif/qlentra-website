interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We identify where leads, customers, and recurring revenue are being lost.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We prepare the campaign workflow, CRM pipeline, approved scripts, US calling setup, agent training, and reporting framework.",
  },
  {
    number: "03",
    title: "Operate",
    description:
      "Qlentra agents handle calls, follow-ups, customer conversations, CRM updates, and required escalations.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We review recorded calls, score quality, track outcomes, identify objections, and continuously improve campaign performance.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-navy-800/12 to-transparent lg:block"
      />
      {steps.map((step) => (
        <div key={step.number} className="relative flex flex-col">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-navy-800/6">
            <span className="bg-gradient-to-br from-violet to-purple bg-clip-text font-display text-2xl font-bold text-transparent">
              {step.number}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-navy-800">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
