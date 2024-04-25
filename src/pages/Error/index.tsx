import { useRouteError } from "react-router-dom";
import Header from "../../components/Header";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";

export default function Component() {
  const error = useRouteError();
  const { data, status, statusText } = error as any;

  return (
    <>
      <Header />
      <main>
        <section className="py-10">
          <div className="mx-auto max-w-2xl px-8 text-left">
            <h1
              data-text={status}
              className="status-error font-bold text-8xl mb-4 brightness-150 contrast-150"
            >
              {status}
              <ExclamationCircleIcon className="absolute w-40 h-40 text-red-500 opacity-30 top-0 -right-0" />
            </h1>

            <h2 className="font-bold text-3xl mb-4">
              {statusText}
            </h2>

            <p>{data}</p>
          </div>
        </section>
      </main>
    </>
  );
}
