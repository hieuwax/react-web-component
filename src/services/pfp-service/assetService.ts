import { wait } from "@testing-library/user-event/dist/utils";
import { Asset } from "../../types/Asset";
import { IListService, ListProps } from "../../types/controller/IListService";
import { Filter } from "../../types/Filter";
import { Pagination } from "../../types/Pagination";
import { PfpAsset } from "../../types/PfpAsset";

export class AssetService implements IListService<Asset> {
  private pfpAssets: PfpAsset[];
  constructor(pfpAssets: PfpAsset[]) {
    this.pfpAssets = pfpAssets;
  }

  async list({
    page,
    pageSize,
    filters,
  }: ListProps<PfpAsset, Filter>): Promise<Pagination<PfpAsset>> {
    await wait(300);
    const from = (page - 1) * pageSize;
    const to = page * pageSize;
    const filteredItems = this.pfpAssets.filter((a) => {
      const result = !filters
        ? true
        : filters.every((f) => {
            const selected = f.items
              .filter((i) => i.checked)
              .map((i) => i.label);
            const result = selected.length === 0 || selected.includes(a[f.key]);
            return result;
          });
      return result;
    });

    return {
      page,
      pageSize,
      rows: filteredItems.slice(from, to),
      totalItems: filteredItems.length,
      totalPages: Math.ceil(filteredItems.length / pageSize),
    };
  }

  getFilters = (): Filter[] => {
    let filters: Filter[] = [
      {
        title: "Backpack",
        key: "backpack",
        items: [],
      },
      {
        title: "Bodies",
        items: [],
        key: "bodies",
      },
      {
        title: "Charms",
        key: "charms",
        items: [],
      },
      {
        title: "Eye wear",
        key: "eyeWear",
        items: [],
      },
      {
        title: "Handheld items",
        key: "handheldItems",
        items: [],
      },
      {
        title: "Heads",
        key: "heads",
        items: [],
      },
      {
        title: "Head wear",
        key: "headWear",
        items: [],
      },
      {
        title: "Necklace",
        key: "necklace",
        items: [],
      },
    ];

    this.pfpAssets.forEach((asset) => {
      filters.forEach((filter) => {
        const value: string = asset[filter.key];
        const existedIndex = filter.items.findIndex((i) => i.label === value);

        const existedItem = filter.items[existedIndex];
        if (existedItem)
          filter.items[existedIndex] = {
            ...existedItem,
            amount: existedItem.amount + 1,
          };
        else
          filter.items.push({
            amount: 1,
            checked: false,
            id: value,
            label: value,
          });
      });
    });
    filters.map((f) => ({ ...f, items: this.pfpAssets.find((a) => a[f.key]) }));
    return filters;
  };

  get(id: number): Promise<PfpAsset | undefined> {
    return Promise.resolve(this.pfpAssets.find((asset) => asset.id === id));
  }
}
