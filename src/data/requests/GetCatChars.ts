import m from 'mithril';
import IChar from './interfaces/IChar';

let CatChars = {
  list: [] as IChar[],
  loadList: async function (id: number) {
    const result = await m.request<IChar[]>({
      method: "GET",
      url: "https://localhost:7108/GetOneCatChars",
      params: { id: id }
    });
    CatChars.list = result;
  },
}

export default CatChars;