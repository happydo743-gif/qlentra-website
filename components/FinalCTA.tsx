import BookingCTA from "@/components/BookingCTA";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gray-soft/50">
      <div className="container-qlentra">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-navy-800 sm:text-4xl">
            Let&apos;s Find the Revenue You&apos;re Currently Missing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Book a focused 20-minute discovery call to discuss your sales,
            customer-retention, lead follow-up, cancellation recovery,
            revenue-recovery, or recurring-revenue opportunity.
          </p>
          <div className="mt-8 flex justify-center">
            <BookingCTA label="Book a Discovery Call" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
