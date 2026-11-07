# merge-collections

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

- `collection_1`, `collection_3` เรียงจากน้อยไปมาก (min 0 → max)
- `collection_2` เรียงจากมากไปน้อย (max → min 0)
- คืนค่าเป็น array ที่เรียงจากน้อยไปมาก โดยไม่ใช้ฟังก์ชัน sort

## สิ่งที่ต้องมี

- Node.js เวอร์ชัน 18 ขึ้นไป
- npm

## ติดตั้ง Dependency

```bash
cd merge-collections
```

```bash
npm install
```

## รันโค้ด

```bash
npm start
```

ผลลัพธ์

```
collection_1: [ 0, 3, 5, 9 ]
collection_2: [ 10, 7, 4, 1, 0 ]
collection_3: [ 2, 6, 8, 11 ]
merged      : [
   0, 0, 1, 2, 3,  4,
   5, 6, 7, 8, 9, 10,
  11
]
```

## รัน Unit Test

```bash
npm test
```

รันพร้อมดู coverage

```bash
npm run test:coverage
```
# merge-collection
