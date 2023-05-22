import { config } from "@/config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";


const getSponsors = async () => {
    return axios
        .get(`${config.SERVER_URL}/sponsor`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useGetSponsors = () => {
    return useQuery(["sponsor"], getSponsors);
};


const update = async ({ payload }) => {
    return axios
        .put(`${config.SERVER_URL}/sponsor`, payload)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

export const useUpdateSponsor = () => {
    const queryClient = useQueryClient()
    return useMutation(update, {
        onSuccess: (data) => {
            console.log(data)
            if(data?.status === "ok"){
                toast.success(data?.message);
            } else {
                toast.warn(data?.message)
            }
            queryClient.invalidateQueries({queryKey: ["sponsor"]})
        },
        onError: (data) => {
            toast.error(data?.message);
        },
    });
};