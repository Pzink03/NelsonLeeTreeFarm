export default function GoogleCalendar() {
  return (
    <section
      id="calendar"
      className="w-full bg-[#f1f3ed] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary-green">
            Nelson Lee Tree Farm
          </p>

          <h2 className="font-serif text-4xl font-bold text-primary-green sm:text-5xl">
            Event Calendar
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-b from-gray-300 to-primary-green" />

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Check out our upcoming events, activities, and important dates at
            Nelson Lee Tree Farm.
          </p>
        </div>

        {/* Calendar */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=3e91016dc3faf13ef8dfca9b15ad4939bc01f0b05f4fe1b14218b55a6112a930%40group.calendar.google.com&ctz=America%2FNew_York"
            className="h-[600px] w-full border-0 sm:h-[700px] lg:h-[800px]"
            title="Nelson Lee Tree Farm Event Calendar"
          />
        </div>
      </div>
    </section>
  )
}
