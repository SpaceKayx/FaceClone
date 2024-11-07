import { selector } from "recoil";
import { createPoster, getAllPoster } from "../../service/AccountService";

export const getListPosterState = selector({
    key: "getListPosterState",
    get: async (accountId) =>{
        return await getAllPoster(accountId);
    }
})
export const createPosterState = selector({
    key: 'createPosterState',
    get: async (poster) =>{
        return await createPoster();
    }
})