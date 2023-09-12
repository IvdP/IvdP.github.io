import m from 'mithril';
import ICat from './interfaces/ICat';

let Cats = {
  list: [] as ICat[],
  loadList: async function (furcolor: string, eyecolor: string, furpattern: string) {
    const result = await m.request<ICat[]>({
      method: "GET",
      url: "https://localhost:7108/GetFilteredCats",
      params: { furcolor: furcolor, eyecolor: eyecolor, furpattern: furpattern }
    });
    Cats.list = result;
  },
}

export default Cats;