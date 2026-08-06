import type { IAppMutations, IAppState } from "@app/types/store.types";

export const appMutations = (set: any) =>
({
    setState: <K extends keyof IAppState>(field: K, value: IAppState[K]) =>
        set((state: IAppState) => ({
            ...state,
            [field]: value,
        }))
} as IAppMutations);