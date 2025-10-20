import { Link } from "@/components/navigation/Link"

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white">
      <div className="container flex items-center justify-between py-6 px-5 mx-auto max-w-screen-md">
        <Link href="/" className="text-2xl font-bold no-underline text-sky-300">
          Drupal Notes{" "}
          <span className="italic font-light text-base text-white">
            by Ed Sardachuk
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="http://dev.acquia.com/person/community/eduard-sardachuk"
            target="_blank"
            rel="external"
            className="block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-5 h-5"
              viewBox="0 0 18 18"
            >
              <path
                d="M9.00016 2.01758L13.2452 6.26258C14.0847 7.10154 14.6565 8.17063 14.8883 9.33462C15.1202 10.4986 15.0016 11.7052 14.5476 12.8018C14.0936 13.8984 13.3245 14.8357 12.3377 15.4952C11.351 16.1546 10.1908 16.5066 9.00391 16.5066C7.81705 16.5066 6.65686 16.1546 5.67008 15.4952C4.6833 14.8357 3.91427 13.8984 3.46026 12.8018C3.00625 11.7052 2.88766 10.4986 3.11949 9.33462C3.35132 8.17063 3.92315 7.10154 4.76266 6.26258L9.00016 2.01758Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9324 16.1669V16.1669C12.4379 15.1695 12.6516 13.0427 11.3746 11.7657L7.23289 7.62403C6.19036 6.5815 6.16065 4.90061 7.16569 3.82189V3.82189"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.97829 9.54395L6.25658 12.2656C5.2374 13.2848 5.292 14.9533 6.37563 15.9036V15.9036"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/eduard-sardachuk/"
            target="_blank"
            rel="external"
            className="block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
