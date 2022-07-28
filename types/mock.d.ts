import type { Item, ServerOptions } from "vue3-easy-data-table";
export declare const mockClientItems: (itemsNumber?: number) => Item[];
export declare const mockServerItems: (serverOptions: ServerOptions, serverItemsLength?: number) => Promise<{
    serverCurrentPageItems: Item[];
    serverTotalItemsLength: number;
}>;
//# sourceMappingURL=mock.d.ts.map