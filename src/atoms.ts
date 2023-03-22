import { atom, selector } from "recoil";

export const queryState = atom({
  key: "query",
  default: "",
});
export const itemQueryState = atom({
  key: "item",
  default: "",
});

export const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const queryValue = get(queryState);
    // hago la búsqueda usando la API de mercadolibre
    if (queryValue) {
      const searchRes = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${queryValue}`
      );
      const resJson = await searchRes.json();
      return resJson.results;
    } else {
      return [];
    }
  },
});

export const itemResultState = selector({
  key: "itemResult",
  get: async ({ get }) => {
    const itemID = get(itemQueryState);
    if (itemID) {
      console.log(itemID);

      const res = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
      const resJson = await res.json();
      console.log(resJson);

      return resJson;
    } else {
      return undefined;
    }
  },
});
