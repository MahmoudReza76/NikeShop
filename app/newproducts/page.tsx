import React from "react";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

async function getData() {
  const query = `*[_type=='product'][0...8] | order(_createdAt desc){
    _id,
  price,
      name,
      "slug":slug.current,
    "categoryName":category->name,
    "imageUrl":images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}
async function AllProducts() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Product
          </h1>
          <Link
            className="text-primary flex items-center gap-x-1"
            href="/newproducts
          "
          >
            See All
            <span>
              <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={Image.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full  "
                />
              </div>
              <div className="mt-4 flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-l text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 ">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
