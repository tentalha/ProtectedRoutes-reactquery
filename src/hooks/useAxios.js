import axios from 'axios';
import { useQuery } from "react-query";


export const useAxios = (key, url, options) => {

    return useQuery(key, () => axios.get(url),
        {...options}
    )
}