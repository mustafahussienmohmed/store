import Image from "next/image";

import { DeleteProduct, UpdateProduct } from "../buttons";
import { fetchProducts } from "../../../lib/data";
import { formatTitle } from "../../../lib/utils";

export default async function Table({ query, currentPage }) {
  const products = await fetchProducts();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products.length === 0 ? (
              <div>4</div>
            ) : (
              products?.map((product) => (
                <div
                  key={product.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={product.image}
                          className="mr-2 rounded-full"
                          width={35}
                          height={35}
                          alt={`${product.title}'s profile picture`}
                        />
                        <p> {formatTitle(product.title)}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                    <p className="font-medium">${product.price}</p>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className=" font-medium">
                        Count : {product.rating.count}
                      </p>
                      <p className="font-medium ">
                        Rating : {product.rating.rate}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateProduct id={product.id} />
                      <DeleteProduct />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Id
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Image
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Count
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.length === 0 ? (
                <div>4</div>
              ) : (
                products?.map((product) => (
                  <tr
                    key={product.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{product.id}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Image
                        src={product.image}
                        className="rounded-full"
                        width={30} // Set only the width or height, not both if needed
                        height={30}
                        alt={`${product.title}'s profile picture`}
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatTitle(product.title)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {product.category}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {product.rating.count}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateProduct id={product.id} />
                        <DeleteProduct />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
