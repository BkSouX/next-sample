import Link from "next/link";

export default function Index() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <ul className="list-none">
            <li>
              <Link href="/ssg"><a>SSG</a></Link>
            </li>
            <li>
              <Link href="/isr">ISR</Link>
            </li>
            <li>
              <Link href="/ssr">SSR</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
