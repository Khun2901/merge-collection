export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const total = collection_1.length + collection_2.length + collection_3.length;
  const result: number[] = new Array(total);

  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  for (let out = 0; out < total; out++) {
    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j >= 0 ? collection_2[j] : Infinity;
    const c = k < collection_3.length ? collection_3[k] : Infinity;

    if (a <= b && a <= c) {
      result[out] = a;
      i++;
    } else if (b <= c) {
      result[out] = b;
      j--;
    } else {
      result[out] = c;
      k++;
    }
  }

  return result;
}
