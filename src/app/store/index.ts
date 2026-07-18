import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { buildStoreAdapter } from "../common/helpers";
import type { IStoreAdapter } from "../common/types";
import type { IAppActions, IAppMutations, IAppState, IAppStore } from "../types/store.types";
import { appActions } from "./actions";
import { appMutations } from "./app.mutations";
import { initialAppState } from "./app.state";

export const appStoreState = create<IAppStore>()(
    devtools((set) => ({
        ...initialAppState,
        ...appMutations(set),
    }))
);

export const appStore = (): IStoreAdapter<IAppState, typeof appStoreState> &
    IAppActions &
    IAppMutations => {
    return {
        ...buildStoreAdapter<IAppState, typeof appStoreState>(appStoreState),
        ...appActions,
        ...appMutations(appStoreState.setState),
    };
}