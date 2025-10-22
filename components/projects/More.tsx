import Link from "next/link";
import React from "react";

function More() {
  return (
    <div className="my-20 w-[200px]  md:w-[300px] border mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full  bg-fun-pink-darkerer font-bold text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink dark:text-white transition-colors cursor-pointer">
      <Link href="https://drive.google.com/drive/folders/1LNR4dsE8EscXqSaXAqXOdP2xhQDq6DSi?fbclid=IwAR0GT_HPcEkdRYkK5sbX2WXe8sDWTZ77pluwU0dL-lL04tnDVvbWxecVrKY">
        <a target="_blank">View All in Drive</a>
      </Link>
    </div>
  );
}

export default More;
