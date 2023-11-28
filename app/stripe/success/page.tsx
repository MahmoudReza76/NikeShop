import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

function StripeSecces() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="w-16 h-16 text-green-600 mx-auto my-16" />
        <div className="text-center">
          <h3 className=" md:text-2xl text-base text-gray-900 font-semibold text-center  ">
            Payment Done
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for your purchas we hope you enjoy it.
          </p>
          <p>Have a great day</p>
          <Button asChild className="mt-6 hover:bg-primary/80">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StripeSecces;
