import m from 'mithril';
import IChar from './interfaces/IChar';

let Filters = {
  FC: [] as IChar[],
  EC: [] as IChar[],
  FP: [] as IChar[],
  loadList: async function (category: string) {
    switch (category) {
      case "fur color":
        Filters.FC = await GetFiltersPerCategory(category);
        break;
      case "eyecolor":
        Filters.EC = await GetFiltersPerCategory(category);
        break;
      case "fur pattern":
        Filters.FP = await GetFiltersPerCategory(category);
        break;
    }
  },
}

async function GetFiltersPerCategory(category: string) {
  return await m.request<IChar[]>({
    method: "GET",
    url: "https://localhost:7108/GetFiltersPerCategory",
    params: { category: category },
  });
}

export default Filters;