import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props {
  product: Product;
}

const WIDTH = 180;
const HEIGHT = 260;

export const ProductCardCappuccino = ({ product }: Props) => {
  const {
    image: images,
  } = product;

  const [front, back] = images ?? [];

  return (
    <div>
      <div class="flex flex-col items-center justify-center bg-slate-50 rounded-md">
        <div class="px-4 pb-4">
          <Image
            style={{
              mixBlendMode: "multiply",
            }}
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            class="rounded w-full"
            preload
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="flex flex-row justify-end items-end">
          <div class="px-4">{product.name}</div>
          <button class="bg-slate-700 rounded-br-lg rounded-tl-lg text-white p-3">
            GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCappuccino;
