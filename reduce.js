let data = [
  { id: 1, name: "potato1", parentId: null },
  { id: 2, name: "potato2", parentId: 1 },
  { id: 3, name: "potato3", parentId: 1 },
  { id: 4, name: "potato4", parentId: 1 },
  { id: 5, name: "potato5", parentId: 1 },
  { id: 6, name: "potato6", parentId: null },
  { id: 7, name: "potato7", parentId: 6 },
  { id: 8, name: "potato8", parentId: 6 },
];
// var op = data.reduce((acc, item, i) => {
//   if (i === 1) {
//     var firstValue = acc;
//     acc = [];
//     if (!firstValue.parentId) {
//       acc.push(firstValue);
//     }
//   }
//   if (item.parentId) {
//     var someValue = acc.map((potato) => {
//       if (potato.id === item.parentId) return potato;
//     });
//     console.log('somevalue',someValue);
//     console.log(`child ${i}`, item);
//   } else {
//     acc.push(item);
//   }
//   return acc;
// });

// console.log(op);

// var parentItems = data.map((x) => {
//   if (!x.parentId) return x;
//   return null;
// });

var parentItems = data.filter((x) => !x.parentId);
var childItems = data.filter((x) => x.parentId);

var result = parentItems.filter((p) =>
  childItems.filter((c) => {
    if (c.parentId === p.id) {
      if (p.parentItems) {
        p.parentItems.push(c);
      } else {
        p.parentItems = [];
        p.parentItems.push(c);
      }
    }
  })
);

result.forEach((element) => {
  console.log(element);
});

//In angular
// dates: Date[] = this.sortedTimeLog.reduce((acc, item) => {
//   if (acc.length === 0) {
//     acc.push(item.log);
//   }
//   if (
//     item.log &&
//     acc[acc.length - 1].toDateString() !== item.log.toDateString()
//   ) {
//     acc.push(item.log);
//   }
//   return acc;
// }, <Date[]>[]);
