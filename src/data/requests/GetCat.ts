import m from 'mithril';
import ICat from './interfaces/ICat';

let Cat = {
  cat: {} as ICat,
  loadCat: async function (id: number) {
    const result = await m.request<ICat>({
      method: "GET",
      url: "https://localhost:7108/GetOneCat",
      params: { id: id }
    });
    Cat.cat = result;
  },
}

export default Cat;