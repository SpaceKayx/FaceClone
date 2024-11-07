import { selector } from "recoil";
import { getAboutMe } from "../service/AccountService";
export const getInformation = selector({
    key: "getInformation",
    get: async () =>{
        return await getAboutMe();
    }
})
