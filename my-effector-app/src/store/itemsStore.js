import { createEvent, createStore, createEffect } from 'effector';


export const addItem = createEvent();


export const itemsStore = createStore([])
  .on(addItem, (state, item) => [...state, item]);


export const fetchItems = createEffect({
  handler: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Item 1', 'Item 2', 'Item 3']);
      }, 2000);
    });
  },
});


fetchItems.done.watch(({ result }) => {
  result.forEach(item => addItem(item));
});
