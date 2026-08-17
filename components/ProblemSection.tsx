import { PhoneMissed, UserX, CreditCard, UserRoundX } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const problems = [
  {
    icon: PhoneMissed,
    title: "Unconverted Leads",
    description:
      "Qualified opportunities can disappear after slow or inconsistent follow-up.",
  },
  {
    icon: UserX,
    title: "Customer Cancellations",
    description:
      "Cancellation requests are often processed without a structured save conversation.",
  },
  {
    icon: CreditCard,
    title: "Failed Payments",
    description:
      "Automated reminders do not always resolve payment issues.",
  },
  {
    icon: UserRoundX,
    title: "Inactive Customers",
    description:
      "Former customers and old opportunities are often never contacted again.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <SectionHeading
          eyebrow="The Gap"
          title="Revenue Is Often Lost After the First Contact"
          description="Leads go unanswered, quotes are not followed up, customers cancel, payments fail, and former customers are never contacted again. Qlentra provides the managed human follow-up layer required to recover those opportunities."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-navy-800/8 bg-gray-soft/60 p-6 transition-colors duration-300 hover:bg-white hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet shadow-sm">
                <problem.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-800">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
