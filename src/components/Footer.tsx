import React from "react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content">
          <MdCopyright /> tomfinney.com {new Date().getFullYear()}
        </div>
        <div className="footer__content">
          <small onClick={handleClick}>Back up</small>
        </div>
      </div>
    </footer>
  );
}

async function fn() {
  try {
    const brandId = "5f706b4a-5dc5-4e10-9f71-e4baecd9604e";
    const categoryId = "5f63c42c-cde7-458e-835f-82e7a58803b3";

    const products = await skeem.fetch({
      products: {
        filter: {
          anyIn: { attribute: "collections", query: { ids: [brandId] } },
        },
      },
    });

    for (const product of products) {
      try {
        await skeem.mutate({
          products: {
            update: {
              id: product.id,
              collections: [{ add: categoryId }],
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    }

    console.log(products);
  } catch (e) {
    console.log(e);
  }
}
