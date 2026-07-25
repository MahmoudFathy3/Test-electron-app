import { Link, useRouteError } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
        <AlertTriangle size={64} className="mx-auto text-red-500" />

        <h1 className="mt-5 text-3xl font-bold text-slate-800">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-500">We couldn't load this page.</p>

        <Link
          to="/"
          className="
            inline-block
            mt-6
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            hover:bg-blue-700
          "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
