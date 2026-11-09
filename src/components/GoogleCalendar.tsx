export default function GoogleCalendar() {
  const calendarId =
    "3e91016dc3faf13ef8dfca9b15ad4939bc01f0b05f4fe1b14218b55a6112a930%40group.calendar.google.com"

  const baseUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FNew_York`

  const mobileUrl = `${baseUrl}&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0`

  const desktopUrl = `${baseUrl}&mode=MONTH`

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

        {/* Mobile Agenda Calendar */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg sm:hidden">
          <iframe
            src={mobileUrl}
            className="h-[600px] w-full border-0"
            title="Nelson Lee Tree Farm Upcoming Events"
          />
        </div>

        {/* Desktop Monthly Calendar */}
        <div className="hidden overflow-hidden rounded-2xl bg-white shadow-lg sm:block">
          <iframe
            src={desktopUrl}
            className="h-[700px] w-full border-0 lg:h-[800px]"
            title="Nelson Lee Tree Farm Monthly Event Calendar"
          />
        </div>
      </div>
    </section>
  )
}
