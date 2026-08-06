import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { buildStoreAdapter } from "@app/common/helpers";
import type { IStoreAdapter } from "@app/common/types";
import type { IAppActions, IAppHelpers, IAppMutations, IAppState, IAppStore } from "@app/types/store.types";
import { appActions } from "./actions";
import { appMutations } from "./app.mutations";
import { initialAppState } from "./app.state";
import { appHelpers } from "./helpers";

export const appStoreState = create<IAppStore>()(
    devtools((set) => ({
        ...initialAppState,
        ...appMutations(set),
    }))
);

export const appStore = (): IStoreAdapter<IAppState, typeof appStoreState> &
    IAppActions &
    IAppMutations &
    IAppHelpers => {
    return {
        ...buildStoreAdapter<IAppState, typeof appStoreState>(appStoreState),
        ...appActions,
        ...appHelpers,
        ...appMutations(appStoreState.setState),
    };
}