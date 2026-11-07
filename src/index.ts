import { merge } from './merge';

export { merge };

if (require.main === module) {
  const collection_1 = [0, 3, 5, 9];
  const collection_2 = [10, 7, 4, 1, 0];
  const collection_3 = [2, 6, 8, 11];

  console.log('collection_1:', collection_1);
  console.log('collection_2:', collection_2);
  console.log('collection_3:', collection_3);
  console.log('merged      :', merge(collection_1, collection_2, collection_3));
}
